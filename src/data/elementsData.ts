import { ElementData, ElementType } from '../types';

export const HERO_BANNER_IMG =
  'https://lh3.googleusercontent.com/aida/AEtjO1VwDnVtfHImT4b2OCBRNzvqfRrIsQK2DwIwWfqVbhHI7LHajPA7mCafP_VwCkFLIIk4TN-c3WtmPC72lEXglpFBcyBJYcw1JCn1H6ETCEAD4fT7iH44ddTaUKMtX0Fgc_RmkyN_ylgDi1eZQBAsb__RmjI7JPqWgIEFBPCBGCp30gfYCe6eG4R-mm0A7jym5YMGUpU9QWyUNsqkdtCRmJgBhUh5OMxF1z2ge27XDRZ1SJimjpUMZ_4A_X4';

export const ELEMENTS_DATA: Record<ElementType, ElementData> = {
  fire: {
    title: '火象 (行动派)',
    element: 'fire',
    symbol: '🔥',
    tagline: '热情直接冲第一',
    constellations: '白羊 · 狮子 · 射手',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    textColor: 'text-orange-600',
    male: {
      name: '火象男孩 · 小火炬',
      charName: '小火炬',
      heroImg:
        'https://lh3.googleusercontent.com/aida/AEtjO1U2SRM9vv8ToXEn1Tgp8rXqCgguWApwyW1FCa0bLdi-wW8lXlkCsBkRXRkmP3zG9cXyc3SJku5768aV9BCUzn15tvt5QLO5hllyL5mBNlFSYXL_DPZSY0qMc9NHKWOzZifCqGdctQFsq0D77Bvp8zILWStLZaTj9HLkvP69fDJqkQy9Hvxv6_eK0mPdl0gWaroWRganK9c9eF4HImCNH_iwNjh72vnKQzUaZ--N881J7LD-RNe4ZQYkJtY',
      keywords: ['热情直接', '行动第一', '勇于尝试', '讨厌拖拉'],
      shortDesc:
        '火象男孩「小火炬」精力旺盛、直截了当。当他着急奔跑或大声催促时，不是故意唱反调，而是内在发动机转速天生比别人更快！',
      whyText:
        '火象男孩「小火炬」是典型的“冲锋小超人”。当他想做一件事时，神经系统瞬间全面调动，无法忍受中间有任何被按停的等待。所以催促、大声喊、甚至急哭，不是脾气坏，而是他在迫切表达行动愿望。',
      sayYes1: '“我知道你现在特别想马上冲过去，太期待了对不对？”',
      sayYes2: '“我们先穿上这只红鞋子，然后数到3就开门冲！”',
      sayNo1: '“你怎么总是这么急躁？你就不能老实坐一秒钟吗？”',
      sayNo2: '“再吵今天就不去了！给我去墙角罚站！”',
      sayReplace: '“小火箭现在进入蓄力倒计时，5、4、3、2、1，准备发射！”',
      scenes: [
        {
          id: 'wakeup',
          title: '早上起床',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1Wc6Z2X7g0WnubgZfF2YuDIbf9eSo8cDSYJ_UWeiEm3H3uGH02QiQoeKvLXccxTSHIZ48oh3HfVrpB-TYmCxAQWveYXj1oAn_Rk783a9Kh69yAkfJ54yhc2kOc4vEtBeT2U8XoQwv32kVfyjrZSGaKNFo0P8zOpbjJpqJ1BPEe4ZTxzMQQOYZtvrVA7X2xkFXuFpJdBV_vVVjPGF6c6q5vo-YNC9ALY1bN4alvWLz0n1fUxrpWx5w376rw',
          why: '睁开眼瞬间弹射起步，身体动作唤醒比说教管用。',
          good: '“今天天气超棒，比赛看谁先跑到阳台！”',
          bad: '“天天赖床！直接迟到看老师怎么批你！”',
        },
        {
          id: 'homework',
          title: '写作业涂鸦',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1UxG3aKk4CLhUnp0aSS_6xAP2mUPSjdWBBBZkBALRqhXjPRgFaEUlgAqMDPqjAnsvODqfUDi6oSAOBgFkNNDaN03P3mNrF8pu_zlmsliZJWtaQbYBEVIuaO4FzMOzkS_oaa7xHttSeivKIJZHUwRb4ANhnnYGEltt7uMDhyv-xCwkmOn-qZuJQ7Kag57It8TAft3EAItw4wc1irmqRHdEli1_CWwQwmgUHMEMgoaxM7KZJT0sVmp3O7UZo',
          why: '对机械重复缺乏耐心，笔透纸背想立刻冲出去。',
          good: '“闪电挑战：3分钟写完这3个字，立刻开吃草莓！”',
          bad: '“字写得跟鸡爬一样！擦了重写10遍！”',
        },
        {
          id: 'meals',
          title: '吃饭餐桌',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1WsdblUrhjbqaxTbYWgl0G1BW1x95a2XCIbQhqeTTxRqgHyv_Tq7wYOjFFq1TVKh7GvG3Mi1GOUvfxZgCfmC9DJG0JN2VA2F82gBChaTfrcuiR02uByc-biFFBtmjMRl9LmyN8UEh3XYpa6xhG8Dmdp56sD6esJqH-xX5esxv1FiYToO3Ux-fw0I2RKty5XZPJaq2XtiLS1DGfPz4w5ZaemIBOSmrGF_QnBXgBShXLzMkUqKevGJwCzVfg',
          why: '狼吞虎咽快速扒两口就想跑去玩。',
          good: '“这是补充奔跑速度的能量西兰花，吃完加满特效！”',
          bad: '“不吃就饿着！看你下午怎么跑！”',
        },
        {
          id: 'phone',
          title: '电子设备',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1WJBtNQUqS9RCmAcHqwJRHOX3fL6NwZZnOHLdzwlEBVMYcDdhj9kZrCrdHis12X7Xd5aHcw88yBmYYywPZNINhFS4FRIgDspyIa1nsKzSXvDUF-g0sKTXYIzcALPeINnpiQoyFyLi288XqM21LbJnpU2lTBD5ICCG7nfZ_4LXY8bgOO36i5dPSLRk9qLkNeFej_gZhdilDE6AeYDwnJUFc-zxcwbqNqfKvFR3Psjsk5fMyo2uDBXW4yeQ4',
          why: '沉迷激烈操作，直接切断会引发反扑。',
          good: '“最后一局打完，我们去楼下踢球抓飞盘！”',
          bad: '“手机没收！一天到晚就知道看屏幕！”',
        },
        {
          id: 'toys',
          title: '收拾玩具',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1UsJLxF-3omBJUwHdwdGR6pOMxiwuB7Ksp8zRmnh_6p4iwMLcPJtpXX82JlqXABwYsX-q7xVr_OsfhcYGuYr8WmEliHHMPbzXx7N0jaTQ8XN--MH_FvyS5B6HMrGh6t9aBYXg6CQ4x9gThsvTBFst3dPf39-vsS6FVpverVgv-MAKcG69NQl6L8swuUTjgiSj6AuMB1UbNW-r6w6heqAaAj1t2UICueRl1VZXvfv3KcHtqqHbrhhaXQLnk',
          why: '整理太枯燥，必须变成竞速游戏。',
          good: '“投篮大战开始！把积木精准投进收纳箱！”',
          bad: '“弄得猪窝一样！全部给你扔垃圾桶！”',
        },
        {
          id: 'out',
          title: '准备出门',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1WISGU1Uei2yHyfwgCf5jmUL3XkRU3-OTwngQ9AcV_b4FQQZwzpEy0iBYRi9LI9Za4S41vptwkKpd_7WC96uY_gnnAJGkBt1uAPI2iJiIXW_VNLxSgIg4jON02w8fwyjZkt1MV_FeywmMWSGve9wHbRXfxL2E1EINLWhg62PBbxLaUkVXf4O-6ml-GkeUMLJQFK-2_sfIUQz25BOx8AzPqL1hxzvhimFM8g-UDXucCdT8GyKv_NSiQmDho',
          why: '急不可耐推门往外冲，鞋子没穿好就想飞奔。',
          good: '“小领队先检查安全带，穿好鞋准时开拔！”',
          bad: '“慌什么慌！没见过世面吗！”',
        },
        {
          id: 'critic',
          title: '被批评教育',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1XkVepB5Z_4hAil8alZKia9TeY2Z4JHzUKRaCzWa-XQVp9Pu_93qvV7-D9vSX7ihBWc0hDpaGJUVg6fIirt2W11U9JWDcnhkM8VjkkohMUpFaMxmcbsfJP6pPQSOwZiImk7NPUfdo0onmLpxiLn8tDNLU0kwXbhjg1uhbEBLda0PMD-SoK6rR4gb6XciaAPg5dLBow02b57Ywflyop3cwkNEkMVoGSmyqoSWnlLQJqmpnF1_hJ1uCTjmRg',
          why: '叉腰鼓腮据理力争，自尊心极强。',
          good: '“我知道你有你的理由，先深呼吸，慢慢跟爸爸说。”',
          bad: '“你还敢顶嘴！无法无天了！”',
        },
        {
          id: 'conflict',
          title: '同伴冲突',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1XOtTwxioIAbUDzfmvPIdbCQ_hYhG5oSsaoAbtPd5GLETf5WLfR6unHC1sutzkw8IQeLLu4g9QEc5KyAt8B7y0vfqY1iXAf17V3-SyYwMfWQOnz15ZEDOj7r7qaZ9oZHmeTBmO93a99OX0qe0apxdDggbf6OCzrdx15DJasp2TPcOhy8wwJEpjEQtXIKCETX4CXdG-u6_uS3c6jXfWvh81mlWuEDbVLdM0HJ76fLDsQKRye_z_s59BZaQ',
          why: '直接对抗护住玩具，绝不退让。',
          good: '“保护自己玩具很有原则！我们用嘴巴说，不动手。”',
          bad: '“你怎么老抢玩具！不懂谦让吗！”',
        },
      ],
    },
    female: {
      name: '火象女孩 · 小火苗',
      charName: '小火苗',
      heroImg:
        'https://lh3.googleusercontent.com/aida/AEtjO1VzyAanJa1bzO4NnIZBlyav02ICiTFuCBtdqOSLFi4kuR355JUcCn3mMDNrWVurFCQ7sv_LA8cfYg4th9v2hYF62LOOC6bElmUPQ1cPIJUk_LCFdCZXRl2vUM6hDJP7LQ5-FBIfBgG65xgrKp2RNPjRJrMdhtz4fMXu3xJYp6CwnFg_JQlGRKoCTZe7CXVRUWSLylGgJgbTOu_ySfwfEPLAX6BQzJQcO7kJSqr5f05kcUsmi8K6QIAW_ik',
      keywords: ['元气自信', '雷厉风行', '开朗直率', '勇敢无畏'],
      shortDesc:
        '火象女孩「小火苗」充满自信与活力，天生是带头小队长。她不喜欢繁琐的说教，更享受目标明确的行动与肯定！',
      whyText:
        '火象女孩「小火苗」率真自信，勇敢表达喜怒哀乐。当她想要表现或冲在最前时，最需要的是父母真诚的击掌与肯定，而不是被泼冷水说‘女孩子别太疯’。',
      sayYes1: '“今天小队长真有精气神，你的热情把大家都点亮了！”',
      sayYes2: '“我们先准备好道具，然后闪亮登场好不好？”',
      sayNo1: '“女孩子家家怎么这么毛躁，安静点不好吗！”',
      sayNo2: '“别显摆了，赶紧坐下来！”',
      sayReplace: '“小太阳准备发光，深吸一口气，我们一步一步稳稳地走！”',
      scenes: [
        {
          id: 'wakeup',
          title: '早上起床',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1Wa6j3B9cSr1xhNRuQxWzvD_VcJPNSSYSwg-DuNvuIHpD7DWN6whDf3VaEV58Vb-JGmoyYBpWo6b_Lr09MryBFXac6318Vg6sS3uJC8Oa6mlR77BW3P2e6t3YtvT98WO215bKEyoE2876CEq4j2gYmVgOdfM7up8LxAh5KaZIz30xGRJSrVoKusWAcQszIhfeYn7y4PyWZ6fW0qcrW6iwsCDA239Zu_HAWRE2uqM7_9HLB3EzKYpGP1vWA',
          why: '晨间跃起元气满格，迫不及待开启新一天冒险。',
          good: '“早安小太阳，今天你的探险小分队要出发啦！”',
          bad: '“大清早咋咋呼呼的，消停一会儿行不行！”',
        },
        {
          id: 'homework',
          title: '写作业涂鸦',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1XDaztxnBY-kQR0KdMz2ZrW8gtgV5XJSvci8ousbhE2XDqAEiTeu7m4wBWcRRE7Dusxh3_4VLrcKroVVmcIHRZUDChriyBw26VDA5F7lpq8-UT5jYhwOG3RkvWMtRtVUlOoqcjYhyOGrMWhtVBqrOemVOHpIKiZ1Xx2ikTvjWNSRHlqm9zuvukOyngM4LVlDO_pp7cjoavqSGJw0kft2YoRX1QPttGUKH3Gjs_tx7IrkD6_SxANqk4dZKw',
          why: '大刀阔斧创作，挥洒自如渴望展现创意与自信。',
          good: '“笔触真有力量感！把这一节通关，你就是最佳小画家！”',
          bad: '“粗心大意！女孩子怎么不能细致点！”',
        },
        {
          id: 'meals',
          title: '吃饭餐桌',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1UaKUnHlKlloIeLx3AT8dilIovZW9DDPYGgj0eG49GLDU_1G7snlpEIy_EEtTcTULdFKjBAaxw_pMi2q9FVKXeUxIgCT4jG6J0M7mEhoK6tmRv0_EmyckWIsN5t4T0YHOriOWNaXSLRVYmGZg2Fed57hErD_f1-YazO6sPGery35D09h54laZG3A9Cxv-DpHNmTO8RGmjmfnPuxdNMwha8jIHN9uYZIxecXqQJAzubBGix7yB2DdTdGxd4',
          why: '豪迈干饭活力充沛，喜欢干脆利落。',
          good: '“大口吃蔬菜的小超人真帅气，能量直接拉满！”',
          bad: '“吃相难看，斯文一点行不行！”',
        },
        {
          id: 'phone',
          title: '电子设备',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1ULf-yDgnPsL_023IisDMb2w2q9Asr5z3A2drr7Q0xq5lyfE8_nVzSMemrduTbXkX7R2CwuNGP4YCKf2UZCJB0fKhyYfLOGgrMjd5ndUQtfE9dnFV23pZ91Llcfrnq2jhXr4Twcps1Yt740zqw0HaQLAVwiSFGmhZL5yPGSmpZu8Zt3FmmGedVdAcO2zJtklGR3YoruYd5o5BZTdFnnUq89cRlpqnF7HAsc7MV1ae8aMqRg1CYEBIkaBjg',
          why: '全情投入激烈闯关，好胜心强渴望证明实力。',
          good: '“这关挑战太棒了！通关后我们去户外放风筝！”',
          bad: '“一天天就知道玩，赶紧关掉！”',
        },
        {
          id: 'toys',
          title: '收拾玩具',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1VSlXYu5a1XEAGujZYBm678vi5HlaA1qkgCEBGN71thx3z9Tx-tmgwmeBVRhFxvzA1nhh-E869M_jFkePhmnLLFejuJAXjJOPyvpfDJuEKZlU4Z6ezTekwu0JaLle-lTVt0HerfS1cuVhPOW89mKbz3gpMGJLV4Se-jpYeGiy4W9j7dTB_SjcSdgDvVa9wVSdrVIcHz2srs1ZRwK-lT3_aVZsZEC-PJfCNg0QvQhH17BHdHKyP4538K1A',
          why: '一股脑豪迈归拢，雷厉风行但细节略糙。',
          good: '“速度太惊人了！小队长带头把最后两块积木归位！”',
          bad: '“敷衍了事！没收好都不许动！”',
        },
        {
          id: 'out',
          title: '准备出门',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1ULwhmfqtCrpxAN7OlIPiMcXiRPkMTghmRjSEgRnQHACy8KcQlM8uS5mUrwxGL62iUj-6P9etN_FaT8VtxrBSJOaGmLmYj0oIdQBX8dQBoU_-TptWxCD89eKp_T99gHUtCJzCvI4jc7EWUOOGCROfAjHtdIOYme0UNA2-8JafOe7Jqe6PJmaA6ck3rQjVlkmTSO5tuAmmpXtQa3Kbf7aUXZg6z2GCtL-CHFXe4hTZGxSste4exlzaR10MU',
          why: '领头冲锋迫不及待，享受带头探索的感觉。',
          good: '“领队带路！我们一起按倒计时整齐出发！”',
          bad: '“急着投胎啊，后面跟着去！”',
        },
        {
          id: 'critic',
          title: '被批评教育',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1WaCoyml6eeW6sDEx_bCPyOUJ4w3cTHvRvc9zSDyo5VhN7oPQfzAFd0-pxgW5Nn2hDQgVD5DV6NuNfgKCP115sJrgunAJm_k39d0SX5mvu8sZVs3h4WsSBepd4fknw6wDg7RVvCFx2YgJvEeAXwZ5i8cd2pwQiIxpYHnfJj6u00YtZXFNhYQJfxNFZU-bU7ch6BIkN0LSQMkOo-x06SJSUpB4EYRKi30uS5zW_7oaX15eSRw6K_WwMDf-M',
          why: '叉腰鼓腮倔强理论，不愿轻易被否定努力。',
          good: '“妈妈看到你的初衷是好的，我们换个更好的方式。”',
          bad: '“还敢瞪眼！给我好好反思！”',
        },
        {
          id: 'conflict',
          title: '同伴冲突',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1XcavjfMSvfXpwxTkI75yX3LLrAGOM9bfnDSYioAuNQotn3pCR0RhwOgKRKVGxLTUnpa-0Nx3e-QvgQ4SbatWyGeAB2gX-N7bY6N6CJAuSlYSkHsAY5R0vsYj82osWnEk5Pc9LMgky-jwZbPhzNJymwW8QdWQo5mQ60sDJQ0dDp73xW1esamURvZVNixIjDAeaFoBjHuqVMJxYKxeja1NxQnKDuvQueoTT6xsQhD4JaRhtFg17Y7EwVgf0',
          why: '挺身而出主持公道，义气护友绝不服软。',
          good: '“你很有正义感！但我们要用智慧化解矛盾。”',
          bad: '“别多管闲事！自己惹祸上身！”',
        },
      ],
    },
  },
  wind: {
    title: '风象 (好奇星)',
    element: 'wind',
    symbol: '🌪️',
    tagline: '思维跳跃点子多',
    constellations: '双子 · 天秤 · 水瓶',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    textColor: 'text-teal-600',
    male: {
      name: '风象男孩 · 小风正',
      charName: '小风正',
      heroImg: '/wind_boy_fixed.png',
      keywords: ['机灵敏捷', '奇思妙想', '善于表达', '探索欲强'],
      shortDesc:
        '风象男孩「小风正」头脑灵活、点子极多。当他跑来跑去东问西问时，大脑正在高速联想，需要用新奇好玩的方式引导专注。',
      whyText:
        '风象男孩「小风正」对世界充满问号。如果用死板教条约束他，他会索然无味；将指令变成新鲜有趣的谜题，他会立刻兴致勃勃。',
      sayYes1: '“你的脑洞太神奇了，这颗星球的秘密我们一起画下来好吗？”',
      sayYes2: '“我们换个解法试试，看看谁的办法更巧妙！”',
      sayNo1: '“天天胡思乱想，能不能干点正经事！”',
      sayNo2: '“老师怎么说你就怎么做，别耍小聪明！”',
      sayReplace: '“小发明家启动灵感捕获网，我们先把第一道机关破解掉！”',
      scenes: [
        {
          id: 'wakeup',
          title: '早上起床',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1X6H7fXOMA6awwDuxYVjbSQTTJQxdyRYq2foPOku-O5riWq9jIbHODqwWLMtc5sLY7XhA9tzWzVLiogV7EYK90Ws_DLXnC6QRHpsOIIHLFfQO-wagKaiUP2pujL0mJT7Zq-iUPupU-_0PbU7d8mDMoKnOM30o3Gw2wvmx2fb08Ay-bfGf6GXBvttcjvnYNE0fQGJoxW7UOAJLqYE9u7jt33Yc5YlPtIhPk_L9_ZCr0gJ3rZyhm0GwZf2B8',
          why: '倒挂床沿好奇探索，脑洞大开神游天外。',
          good: '“小侦探快起床，今天有新的神秘宝藏等你发现！”',
          bad: '“衣服还没穿好又在瞎鼓捣什么！”',
        },
        {
          id: 'homework',
          title: '写作业涂鸦',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1WcskHlNqwAl5s7z2O7keyqHkJhj5p_wM0AITtsNOL7d4q5N2w53zOWxiQ9Ms7MscyxT-WSWr8EMf5NXrsjBCfuyc2YlRfJ1WTy-G5H0OVYPmgbMzDpS-7dV3phpkllfpJl7m0tZMUz76o1hk0R-QEgMtV2tLVM5MvzJpqjErllytukbyg2ZH1-pRQCbBoxz55W1jylQQw95fMW40Xme9D-hB-pyC09kK8o0YMzUwX5mIXxIv2lnf5Gy6M',
          why: '脑洞大开自制铅笔火箭发射，注意力随风而飞。',
          good: '“看看这个字像不像宇宙飞船发射台？我们完成它！”',
          bad: '“坐没坐相！字写这么飘，心都飞到天上去了！”',
        },
        {
          id: 'meals',
          title: '吃饭餐桌',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1UnORdRH3EZcsD-rd1NnhkLv88H7G4UZ3AGoDwBu19JsO7FUCyF_bgW1qpSLrD2IBl0chhianokZrgG1fHV5uM2JdWA8xAONP5XKtmDXCkDSQgSuR1T6sdJPL3TbgQ86X-rSgBv7GzGWI22MGmfLZJxaBnenZTt2v42DDuI5_TVfiaO5EUR-Nj5dJh21UG4mmRwquZtuOHnqf5PADPk9X_j2-0_wdy8j6ScGDOLSn7rtDS67c7JHH8DHg',
          why: '食物创意飞行，把餐盘当成实验工坊。',
          good: '“食物航天飞机准备进舱！一口消灭飞船能量！”',
          bad: '“不许玩食物！快点给我吃进嘴里！”',
        },
        {
          id: 'phone',
          title: '电子设备',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1WK3rP1Iz7U3vMq2ZsXp879GlmBe2l8RvCOVrb2SPCGbI9v_uFSsDZXLPd3-fYSKXjSHOC9t1cwMg5VUnN1P3A2ZicMk3jVKEt_qtuBGsb5oXFQAa1hBhQSYkUynQrGamSuKlNssGyu82sM433Rj3_xvpmhBLyoej0_2CFZFok0dixUPWfBt8S5KddgIJyb2psUzy6nWymPpk0bo1wYqHAWXOeOOTaUeFDwSWzoIu3k1mokNf6bhMM3B8k',
          why: '疯狂切换多任务探索，探索新鲜好奇的应用。',
          good: '“现实里也有神奇化学变色实验，我们一起动手！”',
          bad: '“乱划手机眼睛瞎掉！赶紧交出来！”',
        },
        {
          id: 'toys',
          title: '收拾玩具',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1VeUeuv8qZ0qeNZ55Fp1wG-VTQgXLlFCOM7upmE8LXkeYC8ulfyWkCqU7TwdtuwSFRMz3J7guFXnKrNELIUV1FNSRxKNogPBISlw1hgD5r7nYCz-q2Zv2CK6hXifo6m6kSnKdambOIJ9DxiAHGbCnewDLakZ2O51sYZx_ZOJUiwMLFd3bBRd3eND9sOPGt7USxYI_6hGYISAvCuwD5B9z2SgWT2Grpfyrl3VAfy-AO1d29Bi99fQl012Uk',
          why: '边收边造，把零件拼成全新秘密飞行器。',
          good: '“先把旧零件送回零件库，明天再打造二代火箭！”',
          bad: '“让你收拾你又玩！怎么这么没记性！”',
        },
        {
          id: 'out',
          title: '准备出门',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1Va25eT1-1ymbaoS72VvMYK8Bn1qB1IaS5Q7c4bqY4zfyWcS0d6HFpdD25YMvfoA4rqY8NbbzEUN77i1xCPIunuCGPH2y3mzoZ4uK8mgrKa0nO6QMigwXj-SpNKhdykkFi6zmAHDDfZW19wKv8irRP8hnVu2iwkW0IN77QpQqNZcZrkldrNipx19VisWAF6ADG0rd-MeVaEi7c2XXS4jEaJiNmCtvA89dnhXIhGt-YSCCZeHHC0W9zfV-E',
          why: '单脚踏滑板车推下护目镜摆出起飞姿势。',
          good: '“追风小飞侠已进入跑道，护目镜戴好准备起飞！”',
          bad: '“别滑了，撞到人怎么办，走路！”',
        },
        {
          id: 'critic',
          title: '被批评教育',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1X6r1x461zTK8a-CbwHiBtDRkQcnkoCVz-7iNrfhj1TkngcAYJOGIsHbcAqECraL71t5lFUCdeem3700S6MkYZNhVCv8ErK2U05SBwCHYSljn4Ns-sS4WMe-aWBo_lnOALymfBSlxd27KvwvLGd_jfU3U8pjT8MJX3bHXcRaH3E6adgnep_WYqS7KGYykIjtLWyTVQgUkrTxy1ysdKngvQJb049er5kUO9NjzD6e6GdFLqbPqH296IXqOI',
          why: '眼神骨碌转指东看西，机智转移注意力。',
          good: '“我知道你想缓和气氛，但这件事情我们要认真解决。”',
          bad: '“嬉皮笑脸的干什么！严肃点！”',
        },
        {
          id: 'conflict',
          title: '同伴冲突',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1UEizy3BVdvbbdVhDzRXrbfehBeOURRdp2XzqmJrIltYZv57NS_D9gvlCupv-4RFzzGKSZR2y1YlKT4EZPwAVQhAONj2OW9HvC3hHk6f5gCnSZZEoa02a2fXXPrYr9Pyqkh7YWQsSSybSSoTQ3r1QM4wapmesU2m8PxwZFJgbvY8OEmdcjeGWQKBajf71rYC1Tl7ca-YD6-S0c-SgkMjXzpjNZlrGQTS2iHCSfwV0aXqn2QoxYsqZc-ksE',
          why: '拿出新奇玩具或转动机关，调皮幽默化解僵局。',
          good: '“你懂得用幽默和分享化解尴尬，真是一个小外交官！”',
          bad: '“别打哈哈，到底谁先动手的！”',
        },
      ],
    },
    female: {
      name: '风象女孩 · 小风灵',
      charName: '小风灵',
      heroImg:
        'https://lh3.googleusercontent.com/aida/AEtjO1Wp-6BP8quJrnq47Y9KTU41cgdFi_m08Yy4PZdKx7AYXe3Yj7UbGYZ0sIofqh6lnhnIA4UbyLlh2k75KG5SJ78Qtq59bIzc7lDW9anrukNEM5G3fZnmzsWbpNS2-veSRsvzEMcXVIYhAc1dI5iSHUXP6xylAHf9_cphJBagvjN4C3biQG9W7N_MNK0JwY7cx4z0VMikD4_0w8Wkxo_QD6z4f_AyCyAZUOXwIqZg2GIVq5EOtKibLWNLVO0',
      keywords: ['脑洞大开', '好奇灵动', '热爱新奇', '思维跳跃'],
      shortDesc:
        '风象女孩「小风灵」天生是探索世界的侦探。当她做事走神、东看西看时，其实大脑正在高速联想，需要新鲜刺激引导。',
      whyText:
        '风象女孩「小风灵」的注意力像一阵轻风。她不按套路出牌，不是多动走神，而是普通的重复无法满足求知欲，变成新奇谜题最好用。',
      sayYes1: '“哇，你发现了这个小秘密！那我们一起把它编进故事里！”',
      sayYes2: '“今天我们换一条寻宝路线走到洗手间好不好？”',
      sayNo1: '“你怎么老是东张西望不专心？三心二意成何体统！”',
      sayNo2: '“不许胡思乱想，听话就完事了！”',
      sayReplace: '“我们来做一个寻宝游戏：在房间里找到3个圆形物品收进箱子！”',
      scenes: [
        {
          id: 'wakeup',
          title: '早上起床',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1UY3Uqs8ZfBHtiwwA__LoqzNLjyOFR980DbTEVwifFJrolQspf2bqLloBqrC-8zx9t--7aFSUN_L4Y-LAAl8578cSY7kvEGn7uq2G9f0GH7P7wXUcXv6nvdf6PuCTnxNodZm7rxb8-3yfx9ycH4Ss6031pUkzMaJIQ9VH6bsMbK7X4NtCFk8hyfw9BM8ufOHE17RSFEiR_95eesWPNt0901NOyQcmOKhwbCPxkESd3KLW3dV2T__YjLpdY',
          why: '晨间趴在窗台看小鸟，神游天外。',
          good: '“今天小鸟穿了灰色外套，你今天想穿哪件漂亮衣服？”',
          bad: '“看什么看！一只鸟有什么好看的！”',
        },
        {
          id: 'homework',
          title: '写作业涂鸦',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1V9oktdi5d9pzDbuvZsj9FZAVK_649g-1mN9oMDHrWdzg3CHbgaoVuQ3WG9VwZuXnKvy8-B4QdJHZcl04C1WXEgCG-U3CIKXsdIrFrhWbNejY4RFudFgGhbEkjVNVj642UoD_fOZVsRXrNI9QYTtp-PIuIrX6JhXT2m061UfHgrdxkhn1NvcZgcupaY8BaXvb4hZvN-p1AZuspTVqi9sJU8-Op0NV4yE_Tqvh2h750AdouYhvIjFMsAXM8',
          why: '写着写着开始画小花小鸟，浮想联翩。',
          good: '“这个生字长得像小花伞，写完我们给它配个图！”',
          bad: '“发什么呆！眼睛看哪里呢！”',
        },
        {
          id: 'meals',
          title: '吃饭餐桌',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1WNaasOS09KNEv8rZGt-BRVRETPjwXPxkasuHsQhBt5dVnQEqLvMF3mUFZ3QwsuCbRWoSAxNCnIKe_9FXWMLWJO4PcaiYinVC20ApBoEpdtiaQDbdQoA_tam7AZG7hy4Qp2SkqJ0EF8vihJzld7rVc83Exj213fD5rWjRg57zqVij5k0ym5xOKW2rjAAojlW-EBws_OODM1tYiPjpnY_ksmjvjIsXVwMm7nuBBF618ASIQbGjs7V4eEXc0',
          why: '把胡萝卜摆成笑脸，边吃边聊。',
          good: '“盘子里的微笑艺术展太棒了，先品尝小兔子的耳朵吧！”',
          bad: '“别玩了！脏死了！快吃！”',
        },
        {
          id: 'phone',
          title: '电子设备',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1Vw7z-YaG85ScFa0L_8Y1VBUDIytqQgzpbxrtxK-kQGNerLgsNiSKXSqQ7DJWS8A5c3C5b4fUFe_ieCJ5rvTiYoCyUjxSA6-yIwHNvZlUKGH766aiWMpSrEXRB8xoV6r05dqRCLcHEDMJVW1-EP1CkXYz3IZeYi4Wfb2cUCddas6dstL_8I_FHtYMJBFaBJZ9B85BkxtGnnKlbS0Hc88ZoIjTOUoLeeOJxPWJioZKDiajMUMR6glHqj8no',
          why: '疯狂探索新鲜好玩的滤镜和神奇小互动。',
          good: '“屏幕魔法看完了，现实里也有彩虹泡泡等你吹！”',
          bad: '“整天瞎折腾手机，欠收拾！”',
        },
        {
          id: 'toys',
          title: '收拾玩具',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1VDuI6YbmEsEBheRzIqZmUTauy5EG_G0EO6Ik8pLnS1DIKrowtwd5bgCQB0Uklv5p8fvN-GA_c4qnF7LKp_ndPjbArgv6zx_Ps90m-79xns5nUgm2rEhgR9EApqFck55H607SWPGlIRP34VC2NF0qIqb9eQ0qZRvtl2MNnyVVKkhfB-iL8isELpVwGynudSKEPV-pvwOJRlks9y6i9tuVr7z1lBw5gtoTHhwIFQ8QRT8Bj9XEqy3-UNPA',
          why: '一边收一边翻出旧玩具，原地着迷玩起来。',
          good: '“小玩偶今天想回城堡睡觉了，先送它回家吧！”',
          bad: '“让你收你又坐下玩，真服了你！”',
        },
        {
          id: 'out',
          title: '准备出门',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1WqUIdlW_j2C5mmAZYGi15Dq7Q56EKbfmivVet0CiVRKxR5sZihoWO5WsCYYl_aNzPfIaDzUBcRCX9n17MIyLDZ5TgpDcUgt0jNQpHXVqlIO_yW-4bi4ci9kwHsofHUHToRFuGWXzNgp2fynqwlHHukE42yv-bqCQmK9DgYSALuCDUbTzipuZk1e0BuOF2Io6k0pfFHaZtVNVn42djEvrVmGs4LZKlGGtWu2sc4Xxp-CW-4Ao9R_bc2tQ',
          why: '在玄关穿衣镜前照镜子扮鬼脸走神。',
          good: '“镜子里的小机灵鬼穿好鞋子，准备出发探险啦！”',
          bad: '“照什么照！磨蹭死了！”',
        },
        {
          id: 'critic',
          title: '被批评教育',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1WprGh_T1EZIRCJAzNqgfGl3jIDWyix_Ju8yIICzoCl2YouTE5rT6bZrorgIaOp4jt_yJh9r0X2OzX_s4Ei-ERMlysBEf9MPzsLgpsXQ7XFiLH95SsYHrLGo8NIqfAJ0EW000fB3cY5QG7k5peXOX82re9naZ5_Ovjxyagvld9tFaOz-4IDKBT-C2TWwXRYhVKvztmMOiZGVx1yDRchC9f83aUdZCxmyS69KEt2yD844-EevT6WehiIBzQ',
          why: '眼神飘忽眨巴眼，撒娇或指别处转移话题。',
          good: '“妈妈看着你的眼睛，我们把这件事说清楚，妈妈爱你。”',
          bad: '“看哪里呢！别想蒙混过关！”',
        },
        {
          id: 'conflict',
          title: '同伴冲突',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1UM6Dca1KGlMkQjXzpi8n1zGoO2edeOls7erfKrkMkPAlL8mDcm4VeYdjw_16nr39aNReZU4Io4PWyg8AF9lJU8Mr-V4shX5YdSRtY77PLW6KEcWW-efVfkY25w2OmVfNl2v5ar2vQdqvDwJ4XO0OUz1DFpY_EMWlDKQq3f4flvVZ9O66cK_sSHC0KJSIyJtsQVCzvwNRXIg-ffprxldstC3mudAZPwy4E6BvBYYuWZ2QWmw-vqhNFKQSs',
          why: '拿新奇玩具化解尴尬，扮鬼脸打圆场。',
          good: '“你懂得用快乐化解矛盾，真是个聪明的开心果！”',
          bad: '“严肃点！到底谁对谁错！”',
        },
      ],
    },
  },
  water: {
    title: '水象 (共情家)',
    element: 'water',
    symbol: '💧',
    tagline: '细腻敏锐懂关怀',
    constellations: '巨蟹 · 天蝎 · 双鱼',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-600',
    male: {
      name: '水象男孩 · 小海舟',
      charName: '小海舟',
      heroImg:
        'https://lh3.googleusercontent.com/aida/AEtjO1XlpyEhbDBoyoZOvfMBFoRBe2nu0qsYmL5WAUcnefAq6W3c3oBW6qN-bo3-9Q-DA_HyjsROc7dT32ieJbgYBvdSJ-HxULMgDYp6xMAJ9fd53y6wNOqnQAXOOgtjUNZQzM08nN9hr7HNHca-2LfkPlD5ZHIWyEqCfYzxVsPHRumPLpkPlbd8Hey_Y4IPI9BAbncBx081zEAE0RgnQu5Y8rigzQSfIDr5oMooebNta6hPoPFBthBoet8c6g',
      keywords: ['体贴温柔', '情感丰富', '观察敏锐', '深情重诺'],
      shortDesc:
        '水象男孩「小海舟」拥有一颗细腻柔软的心，能敏锐察觉身边人的情绪波动。他最需要的是被理解与无条件的接纳支持。',
      whyText:
        '水象男孩「小海舟」心思细腻、感同身受能力强。当他退缩或情绪波动时，不是软弱，而是情感负荷大，先给足安全感，他才能积蓄力量勇敢出发。',
      sayYes1: '“难过或委屈都可以跟爸爸妈妈说，流泪不代表不勇敢。”',
      sayYes2: '“爸爸先牵着你的手，我们一起走过去试试看。”',
      sayNo1: '“男子汉大丈夫哭什么哭，丢不丢人！”',
      sayNo2: '“这么胆小窝囊，以后怎么有出息！”',
      sayReplace: '“我们把难过呼出来，把勇气吸进去，妈妈永远是你坚实的后盾。”',
      scenes: [
        {
          id: 'wakeup',
          title: '早上起床',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1Wg-4XZdKMidS0M3iezUJbpqtn2MUa3ah0NY-ZL1GtsvKpXw8azRJM3x8-Dnx59oDKpIzP7gbouw_hWJxeSyWiXjQwrhXqHDyDL6movQLHU8D6vrekonJPG8IJ-OGJh0VECYypienYe9TbeNKkT29CO1i8NOPNctNw0YEn4QX7vKFVgTcMZrQ9biAAskcOJ_wIjUc3PzkYrOBICMJJmMX3zVuGCNAGqz7E2BNzHf6Pq4YBMR88A3hRZm-o',
          why: '晨间眷恋温床，紧抱小鲸鱼软萌依赖。',
          good: '“暖洋洋的小宝贝醒啦，抱抱揉揉背，闻闻太阳的味道。”',
          bad: '“都几点了还哼哼唧唧！自己起来！”',
        },
        {
          id: 'homework',
          title: '写作业涂鸦',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1UiJDU2I5YO39ioDX9Fg4bpiYGy3xNhtw6YrUMnhUHAh5cmXYq7uYCh2HqioMi-ShG40v9YTvQbaxjWONzLpVOOZ10u6hkDy9xE__Q38OZ_w-NjJSe-aICC8JZ1MaaF3SrLA16Go403Gky_QucGyk2p2HUJBoxk0NmpLfR_reWgC9KjAwVxkNb4D1fgxPJTR8NgdDed95WeReE4lAwtZEPuzTNhRI3Wst156YAU95KLBJxj9IWCJxKYezk',
          why: '温柔细腻为小动物画画，需要情感鼓励。',
          good: '“你画的小动物眼里都有光，这份善良太珍贵了！”',
          bad: '“画这些有什么用！赶紧做算术！”',
        },
        {
          id: 'meals',
          title: '吃饭餐桌',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1V_irS_zGmzJpiAy9ITsvJFvY-Bt47tZNzPW5C9BUBngFJyNg82b35irhy_YqjdyouVVbQAH-SkaY06EQUjrI94yr5JTswRsKTwylqWs6dUiwBVatccJuOlMHfwz9qpIJZ59Bq2balaiVqu8qg9gx2HvkUNzWhGdsemfn-A_nklJcmJodz9o3sZoriLYHGM5k4DOy0NOhZZfFLg0leLcQHoOIfpQwYm45pA__8E-tsiiU20-8MmeDXGris',
          why: '贴心懂事为长辈夹菜，察言观色。',
          good: '“谢谢宝贝帮妈妈夹菜，好贴心的小暖男！”',
          bad: '“管好你自己，别瞎操心！”',
        },
        {
          id: 'phone',
          title: '电子设备',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1UXtWnayZSjcwxT-nB4W89Kvl8TXktRLo6mjdhRRNIxJJ1krIiejuuogX6YhgOHqrsMvB2V0LuMgB8e9ZZYUAGlIvD5IbT48Y3lH04SSkZWV4AbKFKnlLk4fzL-11pUkbgeWoWwD1Lz2WJzDMqsZxUBEz2oqN7LH1pW2U9ldsCpLPZvAcGHec54_jzVnym06SxWr4ZT1mFg2i50JljVCeYoZeKsEoaPdFBCa8AyvptLnmboFFZVZyAxBT0',
          why: '沉浸共情，被温情绘本故事感动泛泪。',
          good: '“故事很感人对不对？到爸爸怀里聊聊小狗的经历。”',
          bad: '“看个假动画也哭，莫名其妙！”',
        },
        {
          id: 'toys',
          title: '收拾玩具',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1U9tCnurNQ7HYNSFhAW0MW_FSFICM_a7RTGifbtUOfnZ7m3pUs6Q2V8Vv20loOnKJhav19xdNWj0tK0o4Qvaf9wR0O-OI5L0OB7DBWrlDSQGpG6RkungnUv9WlFaTRh98YVcXZCxxYyRWOOe-Ra_vC0tGnGawIU6xySw8fB-QMBOv3l8e2nQ5n__biGX5YNmN4EmJi8HU84ePJZjQ6v_jLjkvHi_rLfgn867sY3nf3hgkhj6fujhjreGSs',
          why: '依依不舍温柔安顿，给玩偶盖小被子。',
          good: '“小熊玩累了，轻轻给它盖好被子，说声晚安好梦。”',
          bad: '“一堆烂棉花哄什么哄，塞箱子里！”',
        },
        {
          id: 'out',
          title: '准备出门',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1XnFAqqTaAG8XB-XdXMWmv8MVxLK11Kr4yqCYEFxQoa9nNyDSgKU8_CvPTFMzFP3op5fyfF_MZxogfYfBfUhH-Psqd9pU7nMqLOOcYtckhas_qpe-DihN4hxdmUggdH-YR6F8O-xlu3Eq_XOwj8Ve_WNt0t_djLQxYIEJHxZ5gGAvIJu4yT9dK8ds1b-AY1Xb4oasxet7vIkrNub1pc07NybtxkF5CUsNwifbEc-6I8UEfiTOnwCS1FsvQ',
          why: '紧牵衣角紧抱玩偶，寻找情感安全感。',
          good: '“爸爸牵着你的手，不管去哪我们都在一起。”',
          bad: '“黏黏糊糊的大男人，自己走！”',
        },
        {
          id: 'critic',
          title: '被批评教育',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1VOwqlU44knjrkKjF24WXDYF2WorwUTcupNK1QfMzHLDyDcgiS9MmD4tUI477p5N3sg_fN4d_yHV2cKSjoOlQBMn4p7MZADiVLWld8yloeu1U47WEwCKGzirhAUYQQJp4Ug2KDGjPWZafQ2jlSPow7S3GI62IUMPITFA0L-_DZvwGFiDMtOh4UKlWBG0ITFhLKr14r2vGyIQn9wvKZZCt_5hR9DTgYw1ioQwoVOrg4wjtgFr44mY_OSxDc',
          why: '眼含泪光委屈自责，楚楚可怜求抱抱。',
          good: '“妈妈批评的是事情不是你，来，妈妈先抱抱你。”',
          bad: '“哭什么哭！憋回去！”',
        },
        {
          id: 'conflict',
          title: '同伴冲突',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1Wk5OMmXXdkmw-ub5k3cLqNlF1I2cxxXyAttx_B-SZUXfZD2mpqRIpXqYSJqKuY_lq73_Bq3Ab3sIdbEFHrgOj54_kP646Jl39cqynZ-3pLwxv_1aCMvcI6Voj5diCP77Ez3hOe9tit8dlYFM3Mx1llIXXKu6956HpI6v6qvdsBWxFfyeLeC38-eW0wzNZ5D-57YaA1HuG8bOXbMBfPVbytXEDk2WXvm1Qixc0yaBBExiTyGJXgPZqZ-Rc',
          why: '眼含泪花张臂劝架：“大家不要吵架啦”。',
          good: '“你希望大家开心，这份心意很棒，有老师和家长在别怕。”',
          bad: '“他们打架你凑什么热闹！”',
        },
      ],
    },
    female: {
      name: '水象女孩 · 小溪月',
      charName: '小溪月',
      heroImg:
        'https://lh3.googleusercontent.com/aida/AEtjO1XO65osXqXGbevKJpsy_cLjwpKhUFrwvjPKsK8GCutLnF-EsLpn30t0AcEGyc6V3uxMnEivScME63h6Bix3cuBLxI5eCYX0sapoagzDBz17w0Zk4AWDUKTaIMWIHfhZs2ROSRXZzpvBMP9outZWoAAG_STbuaXiWfyZWtubt80XHIZ9aOsmXOQxQDZsyQ0L929aMulBItPaP7h-8lvhj-IPWbGp5He9MDc0lBfTE8FE6ZeBdOOglJhBSmU',
      keywords: ['细腻敏锐', '高共情力', '依恋安全', '易受触动'],
      shortDesc:
        '水象女孩「小溪月」拥有清澈细腻的同理心。她对周围氛围极其敏感，最需要的不是讲大道理，而是温暖的拥抱与陪伴。',
      whyText:
        '水象女孩「小溪月」的安全感开关非常浅。当大人稍微提高音量，她感受到的不是‘事情错了’，而是‘妈妈不爱我了’。所以情绪往往先于理性崩溃，需要先给足确认。',
      sayYes1: '“来，妈妈先抱抱你。我知道你现在心里有点委屈，妈妈一直在。”',
      sayYes2: '“不用怕做不好，不管怎样，妈妈都很喜欢你这份心意。”',
      sayNo1: '“这点小事有什么好哭的？娇气包！”',
      sayNo2: '“你再哭妈妈就不要你了，自己待着去！”',
      sayReplace: '“深吸一口气，把小珍珠眼泪收起来，我们一起把小被子盖好。”',
      scenes: [
        {
          id: 'wakeup',
          title: '早上起床',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1U9fArTOYZ378RBTycvQCGVTFg_3wOv73rJSz5Qr4gGTRF3zUlyiBm1g-pppbRXtPnT7twsecDTLT0tSeD9GCuJ5ifj9pU2g4UMvGQQqvj2wsDLkOh56fPM5rSbjjZ5U8wDTQhLvlNa5xb2VQMaxz2W2w1LRa4S90rKyp1mi1xkIepBeijJv1xNFZP48Dvg-H5nO9AbIky2mzTulALQKnSfaYZnhI0_h6TPHHgxGNqSbosaLjzl-bgeDrE',
          why: '晨间眷恋温床，揉眼睛抱玩偶求抱抱才肯起。',
          good: '“小云朵在怀里融化啦，亲亲额头，咱们去尝尝热牛奶。”',
          bad: '“天天赖床哼唧！没人惯着你！”',
        },
        {
          id: 'homework',
          title: '写作业涂鸦',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1VvtaQ3oqbJ6UVv7wVFknZ97cmSYGcl4iDqyT3ERS9kzr6iCqXrLhMsbpCFNg5l7QKSNtT7aj_0Z0FOLcoch7JPSLzmYFMLNp5l7iKnwPQQ4wXLgfvuFNzTa4t3pMV5NPvTumNfwPhEJezrRqBmdpfhRr-4lOHshMv3csnZMAcQVxRZjQCH9r4CJhi5Yk-uODUI-QBU2Gp80rmoHLAmf_4GsXjSO1wYZwKICYfad9d6_lF1g6CnR8AJ2eA',
          why: '担心画不好挨批评，小手握笔小心翼翼。',
          good: '“画得特别用心，妈妈最喜欢你选的天蓝色，好温柔！”',
          bad: '“磨磨蹭蹭胆子小，画个画都怕！”',
        },
        {
          id: 'meals',
          title: '吃饭餐桌',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1XNEg4wEybVnF_JQtt3UbTs3qaRKOebv6zNQ9PPy4hT5UYcKK4TU82T8NYY1-U7_4mYpoM3PJnFSmcEBT8jeVUtQCkbGCD5VKYxCbFZaS5ZxYPu4LwJhrXQIZg0s6VAmFnCMjTo136Fcp5Qr-5vonk2t3SXRlNFBmwNluCRkdquG63-AwZAM1XDrJb7ZsRK3fkKSh6Zp-v1jrxPRMj_OChjXxl1AZ1fVSHF-PweGQtd1_Jf1UBGMvbF_Ws',
          why: '小口慢咽观察大人脸色，气氛压抑就咽不下。',
          good: '“慢慢嚼不着急，今天这个番茄汤味道喜欢吗？”',
          bad: '“吃顿饭两小时，看别人家孩子多快！”',
        },
        {
          id: 'phone',
          title: '电子设备',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1VAVsnKisobmJOUax8b-_T2v_FwwqXi6S_ZWYWk6WALnxqM8sHWdARPCVOhysJIbtt4uKQV3yv2YEVEoIa3mW6OqpwExFu1j_FS3rjZ0HopIT5ZQwljvSzSraH3b_arg5mx_6zcO4u56Ns5iC3WpdSEg0qC_ZDPU_a6vVau9qPsWTPz27kFR34RiTUS_2R9yVlVtz1cfINdUHiK4hQJ0TEzEK0qbFvACVofcuS3wI8iXuoZCmfxMkE1g2U',
          why: '沉浸情感绘本，为小动物故事感动泪目。',
          good: '“把故事收藏在心里，现在告诉妈妈你最心疼谁。”',
          bad: '“看个绘本掉眼泪，真不知道脑子里想啥！”',
        },
        {
          id: 'toys',
          title: '收拾玩具',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1VQe_9SnXDgkHrM3NqxrPIVFOpt4vSNNABfxq1OY3DD-Py1Lkr_9eW1GT0IwEXACZSkgad3-WkSAs5h1rD5HYycBlIHeFlpHkLuuOWURq2O8GZcOiaTB3iWWKaZjj9Erao0HI5kqB63HFKq5PbtCHHhgC6xrZRnnZ0o5YnVi0bZNxEoiq94hEnRAEYrKHSRK7wX_SeE1QUTIVx-XkhIdjAvJtP6J62x-Uj4FQc4DjNMdAq-FpJeCI2WDQ',
          why: '依依不舍抱紧玩偶，给每个玩具道晚安。',
          good: '“玩具们都安顿好了，它们都在心里谢谢小主人呢。”',
          bad: '“破塑料娃娃天天哄，快塞箱子里！”',
        },
        {
          id: 'out',
          title: '准备出门',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1VwkJ_8CAzLQNj-ZL-XZxX15XJRnRxW6qX6RbmhZ81feUM38UR4GN_BLMzKcbEjKvnMYpP5tg2ku4wbwdWMucjpFvUvinjUAFG07wIACi8KLFv0GDVsLbo35ROl2IaOnSzS-SE8XgPDMD6Cx10BJIjSldoiD_pQbsa1zUOJgk3_7O5aXH0ITFynGCXYbSRiU-_qvWXh6gJrh3Y-2-dOL9GbnqhnS777yee3nPrHCUmOIAvA-ggtYvgsOV0',
          why: '紧紧牵手抓衣角寻求安全感。',
          good: '“牵紧妈妈的手，今天我们去公园看小鸭子。”',
          bad: '“跟屁虫一个，自己走前头！”',
        },
        {
          id: 'critic',
          title: '被批评教育',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1UVBfwQoC9IN8Ae8u8mSwh-kWdv5YCr_zQWAHAvgQW9-1t99YrCEHuO5ZZjZxtI1059sm3bBnU0xn4KPkp-3H9mrsRiZgQ-oeHW2URokwotx7OnJ_gRfmC2lDezu2P19X3wusuTYDFms-EIhL3uzyQ6UuxixwvOOfCPVmAl0Av8aDkOqVNCvlxee25WZ6skNfVj4vwHf7aU8oeVYmRiq7f2To4FGHTOvrBhU1oXpGP_Qo9dCGBWGIRnEg',
          why: '眼含泪光委屈抽泣，楚楚可怜求抱抱。',
          good: '“事情做错了改过来就好，妈妈对你的爱永远不变。”',
          bad: '“哭哭哭，就知道哭！”',
        },
        {
          id: 'conflict',
          title: '同伴冲突',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1WcSGuKWPOhxmj6r0rFnRNx1UcWQ_tZqQJitlCUg_Ii4I_-8yXNQnW0DdANC5ebIy4Qj5RUhJozf2KxtDX-JMFOP8yOwoQUW47mpWX6-vWMCkkQYgiNYjTtzPWEEuhCa56Zn1Q1JKmjOvMPksXnfK0xpLkAdMKJos9IWEa9vfe42fcVHKAuu2d9R2Blm34v29MZVPUuDJv4NprTze76fsJsQlol9R-pzPXHhaot34B1ExH8fyM406XH1g',
          why: '害怕大声争吵，眼含泪水劝和小伙伴。',
          good: '“你是个温暖的小和平使者，别怕，老师来帮忙了。”',
          bad: '“他们吵你哭什么，关你什么事！”',
        },
      ],
    },
  },
  earth: {
    title: '土象 (守规者)',
    element: 'earth',
    symbol: '🌱',
    tagline: '稳重严谨讲规则',
    constellations: '金牛 · 处女 · 摩羯',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-700',
    male: {
      name: '土象男孩 · 小岩安',
      charName: '小岩安',
      heroImg:
        'https://lh3.googleusercontent.com/aida/AEtjO1UMTU_cJb__YgRiU8qNDpqStTTDS01CNHpw8bfodlfbnBiaAAemFebpDPMy2snODYlpVWLrZo-R45TVwrNim_m7nzFDDmwzY-rbqVcXlg84pa_GN8enOPXHqFgSNh7uyxcqOuwNxW2nBfgEtPyO-eecifFOQKfYPtjk2VUZLZbK6t5RKJNtbRdj6bW9k_TMTrJ-4qvX1TApaExXJLtSyTMDf9rY5y5ebh2KY4jsV31HJkZcm5xBV8f6OPg',
      keywords: ['严谨稳重', '秩序井然', '原则分明', '自律专注'],
      shortDesc:
        '土象男孩「小岩安」是天生的小工程师与规则守护者。当他执拗于玩具摆放或流程时，是在建立内在秩序，请尊重他的节奏。',
      whyText:
        '土象男孩「小岩安」‘不动如山’。他需要事先知情权和固定的可预测流程。如果突然打断他的既定节奏，他会产生强烈的不适与抵触。',
      sayYes1: '“按照约好的规则，还有5分钟收玩具，分针走到这里就开始。”',
      sayYes2: '“你搭的高塔真扎实，我们先拍张照保存，再放回盒子里好吗？”',
      sayNo1: '“赶紧给我砸了收了！你怎么这么死板不知变通！”',
      sayNo2: '“别磨蹭了！计划赶不上变化，现在立刻走！”',
      sayReplace: '“我们的计划表进行到了第3项，请秩序小队长确认下一步打卡！”',
      scenes: [
        {
          id: 'wakeup',
          title: '早上起床',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1XJtn5eisVRjkO3ZMsWA-hwByL5mX-HTWKnQpQvTbf49YBgEOyoo7-Hm16ry7XzrmdybD55Tj1AZaXZYePS6n5AGMywaPf8xEdNizfiJ7C0cna6QUrKx-tVpVXF49VIsMfw5ZZoGaSBndj1_xLAlPXC6WHzGM89DNWq_ERWvck9bRNZ2_JitCnhDJ8vpp3ki_5XtzLmcZx9vpvSdI5R_a-xKaWOoYoDCqu-9H1doTmmbAIBYuqPM5oUT4k',
          why: '准时清醒整齐叠被，安静淡定自律。',
          good: '“你总是这么守时自律，今天的晨间时间表执行得真顺畅！”',
          bad: '“愣着干嘛？快点别磨叽！”',
        },
        {
          id: 'homework',
          title: '写作业学习',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1W7mbNEcH4y6gBnNwyxJtRdmtGX0Qxzu_Tn7H32sW6chUTDSGMYumac3XBUtN2HxDUbNz2L4LXlxn8pC-5u7yWk5Aiuk5GA9ymwN1JbVbfVzOKRghEIEvnYF3-vUybY-C5oGZyw-ywe7I41kCZSgJ_vr2IkN1OBAtV3xkujddXEsnVgZvEKEKRJa20sTnBisE9ZYIjLYBl7F4xtI7L062UyxY4DboY0yANI14Xb2vQWFAcwnkfrCMPmO_A',
          why: '坐姿端正一笔一划精益求精，稍微歪了就想重来。',
          good: '“你的严谨认真让生字排得整整齐齐，像小士兵一样帅！”',
          bad: '“差不多得了！吹毛求疵，死心眼！”',
        },
        {
          id: 'meals',
          title: '吃饭餐桌',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1W1VpvXO5okJrtfteXmc_8xbf0yFP6aL1ALSXBrPab4LdEKdQc3EAuuq6nRVaaWUJVifFCZORRoIbs6sUxotHIq8bwPR8fHdzEEeLQDEAZmnzsZZ9Qjcf7tTZUnTDZr1dMiijK4FhbezQ0mRRRpdjJCjf4rTQcVBV6StV5A9gsamPt8XEs2b4tgj1Y-vpVB9CvqswUTnsjU6Flx2yJPKiSa1vAUN_gLOeQnk_qNnJhtL4pFRKfRW9gwj_g',
          why: '坐姿端正细嚼慢咽，干干净净光盘行动。',
          good: '“盘子干干净净，坐姿端正，真是光盘小榜样！”',
          bad: '“别老盯着那一个菜，什么都得吃！”',
        },
        {
          id: 'phone',
          title: '电子设备',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1WOZPoiDe1Xc31vby9-jTspiuZO-HXxNy0ZmFgVi5iW6XvKeBTuBsl76zEGR0vxknzQwE3iGZ5VAAUshz7-bWCMHEW20uPQLyUzq2CTdfRvewHzydF71QyPIkGHaEB-IK6MXYGgSJCp9buHRaM337PSwrXX3bTuJPcqVq5FrLUXjCfG4yqtgOuHjObuqcWpJgaNHBG0ocgZSjABFBdsfPH2Z496NUNggvHB4cBKwrWA8AzfBYzqrlZLANU',
          why: '偏好益智逻辑游戏，定好闹钟严格遵守时间。',
          good: '“闹钟一响准时关机，你真是言出必行的契约大师！”',
          bad: '“看完了没？赶紧交出来！”',
        },
        {
          id: 'toys',
          title: '收拾玩具',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1Wea6X9E8Qac8v4DRl1ioOnseSrgq4TQvhpoM8o4gUT7ovp3uato1Ei2PIaKKJcQtpOqm25MLWQdWUn4Y7XUANxomna26QNG-ZLQDPfFmjm6d5FdPBl1NjrfIs2lfAR5YjiDHIJdB2sO3tSK_QP3u0hb3j-uVIVOFBR4lvcHPa1rRf_cb0WDMz_i0c-qRY2VVU2E5fCNk714dOWazHu--WaTBhb4CTuaeQAqu1BNRfFhk_vhzWCif8nAUU',
          why: '按大小、颜色极其严格地分类归位。',
          good: '“你的分类标签贴得真清楚，找零件一定非常高效！”',
          bad: '“随便一倒就行了，哪来那么多讲究！”',
        },
        {
          id: 'out',
          title: '准备出门',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1VrpSPdnv5ivod9KPdqdwlORUc_XD-WzbbIdG0H_4qzzbrpmWSzzpFDF1G-_3Uv3CMXkEvLG0-wf4IJePd7uqbDphMEvh_2hcOY5j_A5VjNPp9fpPikE6GXySdqSMRvrZOOOcCwIVMf1nH_p5a6JQeiXBDrbLgi-QJnX8D1lP9QcZ-37y-c9nossqtzhOP0D2bS1E_WwfEH6Zm4u5JPuczEaOaY70VgTtZ6fJS7WaC71_8Vn447TgpFVg',
          why: '独立穿鞋背好书包，安静端正等待。',
          good: '“你总是提前准备好，让人特别安心可靠！”',
          bad: '“傻站着干嘛，催催他们去！”',
        },
        {
          id: 'critic',
          title: '被批评教育',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1Wg-Gsxr_hJ3W4e5vIDqfQkMAfQSYMnocQFXDRwGniHpNcw_19_TslSX_f8RtsEUKCbm75fwcrZiw2jcaTuzdvzFOs_y6Sh4UwWvmqZszRrdHxQaSxqvyPTGTmxsSaLT4HsysQehRwR0vVM9cbK8F1NjXZsHIWzkGtRZL71u2BuvsBhtp9yBuGn6qWt8xVXzgCiK-0uGXIVK6ybrYZ9DotkCyVq_PoVef05eJIAwD68cecOQRRlwDBPt68',
          why: '低头内省认真消化，默默点头自省。',
          good: '“感谢你认真听妈妈讲道理，我们一起把细节调整好。”',
          bad: '“哑巴啦！问你话怎么不说话！”',
        },
        {
          id: 'conflict',
          title: '同伴冲突',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1Vjqstz-BFj-sAhlfh_8J9e4eSXr-4gJKyQhsDcDToKVetP_ZUSinPTl4eijOMn6EzzZjEoWVsCFOodFctMChyWxMIApy-YnEbqYEpLG7DfzO0OrEzX0SXpt8zFpi7b2bHua_qRhDenIye7pMlgrAExO0jhtDvHHkzYdyr7E_reP9YirDEixOYGdOtCxOFEsbkouMupEJVWlcCH9KYMVF4tF_rRGx4yAFZMPaDpcNKkuqhoybjvogPzHQ',
          why: '原则坚定护住作品不动如山，身前挡住火象讲规则。',
          good: '“你守护自己劳动成果的原则完全正确，妈妈支持你！”',
          bad: '“不就几个积木，让别人碰一下怎么了，真小气！”',
        },
      ],
    },
    female: {
      name: '土象女孩 · 小山宁',
      charName: '小山宁',
      heroImg:
        'https://lh3.googleusercontent.com/aida/AEtjO1XZhI2caRyNzvf4opCeJEns3QBjwfzrxgMhMIltrModNHD7VXNoLgqQ08amaHXaDsdEQp2R5eDZixuVcSBFzdKCdPUj5_fJXpLXRg-rCWj4z6QdnFQ9zBbEu7aNYgNkTudGoJSZWPQWnQ8KsLOlkeYXo0lDtgWKkPB48FtPk-rGRcizNiKu037pic9qx-Yn1kZrio0_CdDArsIJ50R5LpA1VC_YdHBZKUMRTE5VD4aFFzjZMnoEs0xCcaU',
      keywords: ['沉稳踏实', '细致耐心', '讲究秩序', '信守约定'],
      shortDesc:
        '土象女孩「小山宁」做事条理分明、专注而踏实。她喜欢可预测的日程和清楚的约定，是让人特别放心的自律小能手。',
      whyText:
        '土象女孩「小山宁」做事条理分明、踏实且有恒心。面对新环境或计划变动，她需要时间适应和清晰的预案支持，不要仓促催促她。',
      sayYes1: '“我们提前做好出行清单，勾选完成一项就出发，有条不紊！”',
      sayYes2: '“你的耐心真让人佩服，每一个细节都照顾到了。”',
      sayNo1: '“怎么这么磨磨蹭蹭，随便弄弄得了！”',
      sayNo2: '“别较真了，差不多就行！”',
      sayReplace: '“按照你的完美标准，我们完成了第1阶段，准备进入第2阶段！”',
      scenes: [
        {
          id: 'wakeup',
          title: '早上起床',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1WEWZ5VOZeuGqksa-1qB149ycLL2WQOTV8JDAbQl7DXK1TfyMfpiDtJJhAPTxzYFji38660aNdNUDblFureIK5Tf1KX-Exf9hyNNR5zmpEne82cc1hoIbrfXiGWJWI3R9v5QI9AqmtMug97sSS6M9xap8AwGYpTujfyOD9_OCujua7g3L3Uad2gikBkPwslWQxbvCsoAEPjt_AwxsChd2Z4KtYuDWuPToJN-lI8CHi13rqYeDDbPbYo_w',
          why: '闹钟准点端正坐起，整齐叠被严谨自律。',
          good: '“准时自律的小学者起床啦，今天的时间表一定很棒！”',
          bad: '“叠什么被子，赶紧出来刷牙！”',
        },
        {
          id: 'homework',
          title: '写作业学习',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1Wgm7l6uBt0HrGEoCM_DOVVcqgPjdoktOnO5gYKd2rsN4nbbYhaNwp510BhOHSITJSWySn8kU4wVEhny-c7pmnVirPY2vFcLfRHN7TB3Ivh2xi9vEFAypQE2kORdo16J_fk9HoYnW5x0drmZsCKL6HJRMMtAxCwZzDdQuatGDVShRMzq4SJKF0TwcE8xa15bKFDJAMXTKf6ckbFzo1jyiCHs9_RgyzcRf6qclIma2TOeupw4YEyyoZr0kA',
          why: '文具排齐专注打勾，严谨核对每一个任务。',
          good: '“每一个任务都打上漂亮的勾，条理清晰极了！”',
          bad: '“做这么慢，快写快写！”',
        },
        {
          id: 'meals',
          title: '吃饭餐桌',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1WRnj2VZNlyf8Lrdq3HUoiOLPsndaSbA1OjL0vWvEuI9v_OIgy4JsJo7Vqgel8NmZGST-p9-kjxcHXCdYK18ArGaFS4SfnpaQEW5ixbIvM0_Z0TcJaoyh3HFQu8L7X-SllBGsOJ_y6gngExygnXyrMwQT7UxBKOoKvg9lt85GLk8awUNq2T8Yxjbn6js9bUUIU9-QuHfWX3GLCkZapxcair_TKWJ3Y5flTmRTAfXObOHcuxjcadDeGRarg',
          why: '荤素均衡秩序井然，规规矩矩光盘。',
          good: '“营养搭配得真好，每一口都认真吃完，为你点赞！”',
          bad: '“挑挑拣拣吃这么整齐干嘛！”',
        },
        {
          id: 'phone',
          title: '电子设备',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1W0SR24AIxebm-Fbu0WEhY_608s-fmvK8I3ZNdr7nBJNfPlkR2E8Cr2vbZY4YB_j3yRoTZ9SMz0f8xJ_WTB49pCikY18P9xLtvmvZBCTHmNgH391ZYMU6yFLTyOj8Bgt4rm8FR7qbOAhS4b7A7nElyrlt88hq7t8Miha5RZHIfAICkzR9aGbjHwhdvMX9r6DjJhhVSwb7N2ktxU3JP3Q4773aAlfOk0tdM1QWb8A3aMm50tBnsUNuvijcU',
          why: '益智数独逻辑拼图，沙漏计时规矩自律。',
          good: '“沙漏一漏完就放下平板，自控力真让人佩服！”',
          bad: '“别看那些死板游戏了，换个看！”',
        },
        {
          id: 'toys',
          title: '收拾玩具',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1WsVYXCJ7jLa_lKtLWbXu646yGCy17qogbjsKUDcJLKea84ID1ySCAebtGNsdr4GT6p2yuU0YI6HzetxVifJDSRiW2tsLEGdTvpvPhGaYu5BhTlHOKdW4iIUsaKa_We5m_brbuWKaLES97yFYsApUmyPYntMZg7ms_M-1xJJ3oUflWFrxv7fPEyL1ec16JmUKHpSsfEXU8W13MKnS7scoWRyqZqNrps8kSC4sQ6C1LzcXww43zgvR9Dhw',
          why: '严谨分类贴标签归位，标本收纳大师。',
          good: '“分类大师出手，整个房间都变得井井有条！”',
          bad: '“磨蹭半天归类，随便扔盒里就行！”',
        },
        {
          id: 'out',
          title: '准备出门',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1WI-S6At0qs-iRm87STMi1AvgP10KBqkMsXCmMkzaGP-vsToTby3eIEy7YGaDpFCAwWP9QHxTEnUHKJAOiaWRkUSEeHSE1XVCy0ySC0JTS4WEDlzaMXJiNQZHxiHV9Tm0Z0E5u53fmdOc7hYaSy5jSDehlw6z-VQYRa-DeOp3M65ff6_LaNC4-fvYZR2qrHT2rg093hiMfeE1NyWsl3OhK0pwOH_Ur9WavzSQSh8u-qWEnawGeMwWkj-g',
          why: '背好书包核对手写清单，准时端正等待。',
          good: '“清单全部核对完毕，准点出发，靠谱极了！”',
          bad: '“清单有啥好看的，直接走！”',
        },
        {
          id: 'critic',
          title: '被批评教育',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1UdKrTFKhRrnx7qv7a_UK-i_Xe0pyzYV3uTbAZNrfUckeVHQCSIXuBIJHO2ac96xy7D4vYgTLW4W1tUK-TCjRhRX6rsnfLljQBSsTWwnB2gRdvq37fUVyF7wdaBD0SoFmgAOCfKGD1F5CHKoZop1wHOjR-5q3tDIVDZMnlQzMBapQrdErjVzanhgDtMcDe6gfSxaTLPB26gu2MHwRfcENsDVzpmrv8ybzsNFWMbwPGm3r3X5ooSY9hNKPk',
          why: '双手背后端正站立，认真倾听默默自省。',
          good: '“妈妈很欣赏你的倾听态度，我们一起把规则执行好。”',
          bad: '“别装好学生，听到没有！”',
        },
        {
          id: 'conflict',
          title: '同伴冲突',
          img: 'https://lh3.googleusercontent.com/aida/AEtjO1V-6uL7BQGzHIicsfD9IEOOowQWtKh7Kd2d1PffmE0InA6oTyWjtuf09AxZQj0DfaUSmeNyUas4c1NBXfG7RyXO292CP2tseJp1_Z7AFDnMbBgnLo_sHgfMsXP7_ZaLmRuuXVuBkh_kdjqPvagEDXHXUCG1bEgwJxWyHh8q7ipd3YknVM3LeULNmNP870CyRmmyl5W8PGqQ6rTlRpJMGR_hY0wY9GsRGK1E3npH8CqVHjMU5d_Sw2FVM28',
          why: '原则坚定摆出规则板，讲道理分对错护秩序。',
          good: '“讲规则是解决争端最好的办法，你做得很公正！”',
          bad: '“跟小朋友计较什么规则，让着点！”',
        },
      ],
    },
  },
};

export interface ConstellationResult {
  constellation: string;
  element: ElementType;
  icon: string;
  title: string;
  description: string;
}

export function calcConstellation(m: number, d: number): ConstellationResult {
  const month = Number(m);
  const day = Number(d);

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return {
      constellation: '白羊座',
      element: 'fire',
      icon: '♈',
      title: '🔥 火象 (行动派)',
      description: '白羊座天生是小冲锋官，勇敢真挚、行动果断。',
    };
  }
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return {
      constellation: '金牛座',
      element: 'earth',
      icon: '♉',
      title: '🌱 土象 (守规者)',
      description: '金牛座沉稳踏实、温和执着，重视安全感与生活品质。',
    };
  }
  if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    return {
      constellation: '双子座',
      element: 'wind',
      icon: '♊',
      title: '🌪️ 风象 (好奇星)',
      description: '双子座机灵好奇、点子丰富，充满表达欲与求知欲。',
    };
  }
  if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    return {
      constellation: '巨蟹座',
      element: 'water',
      icon: '♋',
      title: '💧 水象 (共情家)',
      description: '巨蟹座体贴深情、依恋家庭，拥有敏锐的情绪共鸣力。',
    };
  }
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return {
      constellation: '狮子座',
      element: 'fire',
      icon: '♌',
      title: '🔥 火象 (行动派)',
      description: '狮子座元气充沛、自信大度，享受肯定与带头小队长的角色。',
    };
  }
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return {
      constellation: '处女座',
      element: 'earth',
      icon: '♍',
      title: '🌱 土象 (守规者)',
      description: '处女座严谨细致、讲究条理，追求完美与可预测的秩序。',
    };
  }
  if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
    return {
      constellation: '天秤座',
      element: 'wind',
      icon: '♎',
      title: '🌪️ 风象 (好奇星)',
      description: '天秤座温和优雅、擅长协调，喜欢和谐美感与快乐交流。',
    };
  }
  if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) {
    return {
      constellation: '天蝎座',
      element: 'water',
      icon: '♏',
      title: '💧 水象 (共情家)',
      description: '天蝎座深情执着、洞察敏锐，最看重亲子间的忠诚与信任。',
    };
  }
  if ((month === 11 && day >= 23) || (month === 12 && day <= 21)) {
    return {
      constellation: '射手座',
      element: 'fire',
      icon: '♐',
      title: '🔥 火象 (行动派)',
      description: '射手座乐观开朗、崇尚自由，对大自然和未知充满探索渴望。',
    };
  }
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return {
      constellation: '摩羯座',
      element: 'earth',
      icon: '♑',
      title: '🌱 土象 (守规者)',
      description: '摩羯座自律坚毅、遵守约定，小小年纪就展现出大将之风。',
    };
  }
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return {
      constellation: '水瓶座',
      element: 'wind',
      icon: '♒',
      title: '🌪️ 风象 (好奇星)',
      description: '水瓶座独具个性、脑洞大开，拥有天马行空的创造力和同伴友爱。',
    };
  }
  return {
    constellation: '双鱼座',
    element: 'water',
    icon: '♓',
    title: '💧 水象 (共情家)',
    description: '双鱼座浪漫善良、富有同情心，生活在充满童话爱意的世界里。',
  };
}
