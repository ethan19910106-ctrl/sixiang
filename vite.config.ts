import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';

// 服务端内存中的用户状态存储及已消耗测试记录
interface ServerUserState {
  userId: string;
  freeTestRemaining: number;
  shareRewardUsed: boolean;
  paidAccess: boolean;
  createdAt: number;
  updatedAt: number;
  consumedTests: Set<string>;
}

const serverUserMap = new Map<string, ServerUserState>();

function getOrCreateServerUser(userId: string): ServerUserState {
  let user = serverUserMap.get(userId);
  if (!user) {
    user = {
      userId,
      freeTestRemaining: 1,
      shareRewardUsed: false,
      paidAccess: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      consumedTests: new Set<string>(),
    };
    serverUserMap.set(userId, user);
  }
  return user;
}

function apiServerPlugin(): Plugin {
  return {
    name: 'api-server-middleware',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith('/api/')) {
          return next();
        }

        const url = new URL(req.url, 'http://localhost');
        const pathname = url.pathname;

        // 统一辅助解析 JSON body
        const readBody = async (): Promise<any> => {
          return new Promise((resolve) => {
            let body = '';
            req.on('data', (chunk) => {
              body += chunk;
            });
            req.on('end', () => {
              try {
                resolve(body ? JSON.parse(body) : {});
              } catch {
                resolve({});
              }
            });
          });
        };

        const sendJson = (data: any, statusCode = 200) => {
          res.statusCode = statusCode;
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.end(JSON.stringify(data));
        };

        // 1. GET /api/user/status?userId=...
        if (req.method === 'GET' && pathname === '/api/user/status') {
          const userId = url.searchParams.get('userId') || 'guest';
          const user = getOrCreateServerUser(userId);
          const { consumedTests, ...safeUser } = user;
          return sendJson(safeUser);
        }

        // 2. POST /api/test/check-access
        if (req.method === 'POST' && pathname === '/api/test/check-access') {
          const body = await readBody();
          const userId = body.userId || 'guest';
          const user = getOrCreateServerUser(userId);
          const allowed = user.paidAccess || user.freeTestRemaining > 0;
          return sendJson({
            allowed,
            reason: user.paidAccess ? 'paid' : user.freeTestRemaining > 0 ? 'free' : 'quota_exhausted',
            freeRemaining: user.freeTestRemaining,
            paidAccess: user.paidAccess,
            shareRewardUsed: user.shareRewardUsed,
          });
        }

        // 3. POST /api/test/consume
        if (req.method === 'POST' && pathname === '/api/test/consume') {
          const body = await readBody();
          const userId = body.userId || 'guest';
          const testId = body.testId || `test_${Date.now()}`;
          const user = getOrCreateServerUser(userId);

          // 幂等防重：若同一次测算已被记录，直接放行
          if (user.consumedTests.has(testId)) {
            const { consumedTests, ...safeUser } = user;
            return sendJson({ allowed: true, user: safeUser, idempotent: true });
          }

          if (user.paidAccess) {
            user.consumedTests.add(testId);
            user.updatedAt = Date.now();
            const { consumedTests, ...safeUser } = user;
            return sendJson({ allowed: true, user: safeUser });
          }

          if (user.freeTestRemaining > 0) {
            user.freeTestRemaining -= 1;
            user.consumedTests.add(testId);
            user.updatedAt = Date.now();
            const { consumedTests, ...safeUser } = user;
            return sendJson({ allowed: true, user: safeUser });
          }

          const { consumedTests, ...safeUser } = user;
          return sendJson(
            {
              allowed: false,
              user: safeUser,
              message: '免费测试次数已用完，请解锁后继续测试',
            },
            403
          );
        }

        // 4. POST /api/share/claim-reward
        if (req.method === 'POST' && pathname === '/api/share/claim-reward') {
          const body = await readBody();
          const userId = body.userId || 'guest';
          const user = getOrCreateServerUser(userId);

          if (user.shareRewardUsed) {
            const { consumedTests, ...safeUser } = user;
            return sendJson(
              {
                success: false,
                message: '每个用户最多只能获得1次分享奖励，您已领取过了。',
                user: safeUser,
              },
              400
            );
          }

          user.shareRewardUsed = true;
          user.freeTestRemaining += 1;
          user.updatedAt = Date.now();
          const { consumedTests, ...safeUser } = user;
          return sendJson({
            success: true,
            message: '🎉 恭喜！已成功获得 1 次额外免费测试机会！',
            user: safeUser,
          });
        }

        // 5. POST /api/payment/mock-checkout
        if (req.method === 'POST' && pathname === '/api/payment/mock-checkout') {
          const body = await readBody();
          const userId = body.userId || 'guest';
          const user = getOrCreateServerUser(userId);

          user.paidAccess = true;
          user.updatedAt = Date.now();
          const { consumedTests, ...safeUser } = user;
          return sendJson({
            success: true,
            message: '支付成功！已解锁无限测试权限。',
            user: safeUser,
          });
        }

        // 6. POST /api/user/debug-reset
        if (req.method === 'POST' && pathname === '/api/user/debug-reset') {
          const body = await readBody();
          const userId = body.userId || 'guest';
          const user = getOrCreateServerUser(userId);

          if (typeof body.freeTestRemaining === 'number') {
            user.freeTestRemaining = body.freeTestRemaining;
          }
          if (typeof body.shareRewardUsed === 'boolean') {
            user.shareRewardUsed = body.shareRewardUsed;
          }
          if (typeof body.paidAccess === 'boolean') {
            user.paidAccess = body.paidAccess;
          }
          user.updatedAt = Date.now();
          user.consumedTests.clear();

          const { consumedTests, ...safeUser } = user;
          return sendJson({ success: true, user: safeUser });
        }

        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), apiServerPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
