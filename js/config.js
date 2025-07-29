// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000,  // 验证有效期（90天，约3个月）
    adminLocalStorageKey: 'adminPasswordVerified'  // 新增的管理员验证状态的键名
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com', 
    },
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
    },
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源',
    },
    xiaomaomi: {
        api: 'https://zy.xmm.hk/api.php/provide/vod',
        name: '小猫咪资源',
    },
    ffzy: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡影视',
        detail: 'http://ffzy5.tv', 
    },
    heimuer: {
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
        name: '黑木耳',
        detail: 'https://heimuer.tv', 
    },
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360资源',
    },
    iqiyi: {
        api: 'https://www.iqiyizyapi.com/api.php/provide/vod',
        name: 'iqiyi资源',
    },
    wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    }, 
    hwba: {
        api: 'https://cjhwba.com/api.php/provide/vod',
        name: '华为吧资源',
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
        detail: 'https://jszyapi.com', 
    },
    dbzy: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: '豆瓣资源',
    },
    mozhua: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪资源',
    },
    mdzy: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源',
    },
    zuid: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '最大资源'
    },
    yinghua: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源'
    },
    baidu: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度云资源'
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽资源'
    },
    wwzy: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '旺旺短剧'
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'iKun资源'
    },
    lzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/',
        name: '量子资源站'
    },
    testSource: {
        api: 'https://www.example.com/api.php/provide/vod',
        name: '空内容测试源',
        adult: true
    },
    // 下面是一些成人内容的API源，默认隐藏，使用本项目浏览黄色内容违背项目初衷
    // 互联网上传播的色情内容将人彻底客体化、工具化，是性别解放和人类平等道路上的巨大障碍。
    // 这些黄色影片是资本主义父权制压迫的最恶毒体现，它将暴力和屈辱商品化，践踏人的尊严，对受害者造成无法弥愈的伤害，并毒害社会关系。
    // 资本为了利润，不惜将最卑劣的剥削（包括对受害者和表演者的剥削）和暴力商品化，
    // 把性别剥削塑造成“性享受”麻痹观众的意识，转移我们对现实生活中矛盾和压迫的注意力。
    // 这些影片和背后的产业已经使数百万男女“下海”，出卖自己的身体，甚至以此为生计。
    // 而作为观众无辜吗？毫无疑问，他们促成了黄色产业链的再生产。
    // 我们提供此警告，是希望您能认清这些内容的本质——它们是压迫和奴役的工具，而非娱乐。
     ckzy: {
         api: 'https:www.ckzy1.com',
         name: 'CK资源',
         adult: true
     },
     jkun: {
         api: 'https:jkunzyapi.com',
         name: 'jkun资源',
         adult: true
     },
     bwzy: {
         api: 'https:api.bwzym3u8.com',
         name: '百万资源',
         adult: true
     },
     souav: {
         api: 'https:api.souavzy.vip',
         name: 'souav资源',
         adult: true
     },
     r155: {
         api: 'https:155api.com',
         name: '155资源',
         adult: true
     },
     lsb: {
         api: 'https:apilsbzy1.com',
         name: 'lsb资源',
         adult: true
     },
     huangcang: {
         api: 'https:hsckzy.vip',
         name: '黄色仓库',
         adult: true,
         detail: 'https:hsckzy.vip'
     },
     yutu: {
         api: 'https:yutuzy10.com',
         name: '玉兔资源',
         adult: true
     },

     下面是资源失效率高的API源，不建议使用
     subo: {
         api: 'https:subocaiji.com/api.php/provide/vod',
         name: '速播资源'
     },
     fczy: {
         api: 'https:api.fczy888.me/api.php/provide/vod',
         name: '蜂巢资源'
     },
     ukzy: {
         api: 'https:api.ukuapi88.com/api.php/provide/vod',
         name: 'U酷资源'
     },
    1  : {
        api: 'http://hongniuzy2.com/api.php/provide/vod',
        name: '紅牛資源'
    },
    2  : {
        api: 'http://cj.lziapi.com/api.php/provide/vod',
        name: '量子資源'
    },
    3  : {
        api: 'http://vod-demo.onrender.com/pubdovod.php',
        name: '開放電影'
    },
    4  : {
        api: 'http://api.1080zyku.com/inc/api.php/provide/vod',
        name: '优质资源库'
    },
    5  : {
        api: 'http://39kan.com/api.php/provide/vod',
        name: '39影視'
    },
    6  : {
        api: 'http://vipmv.cc/api.php/provide/vod',
        name: '天堂资源'
    },
    7  : {
        api: 'http://lehootv.com/api.php/provide/vod',
        name: '乐活影视'
    },
    8  : {
        api: 'http://tangrenjie.tv/api.php/provide/vod',
        name: '唐人街'
    },
    9  : {
        api: 'http://api.kuapi.cc/api.php/provide/vod',
        name: '酷点资源'
    },
    10 : {
        api: 'http://collect.wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源'
    },
    11 : {
        api: 'http://kudian10.com/api.php/provide/vod',
        name: '酷点资源'
    },
    12 : {
        api: 'http://tangrenjie.tv/api.php/provide/vod',
        name: '唐人街'
    },
    13 : {
        api: 'http://slapibf.com/api.php/provide/vod',
        name: '森林资源'
    },
    14 : {
        api: 'http://api.ykapi.net/api.php/provide/vod',
        name: '影库资源网'
    },
    15 : {
        api: 'http://caiji.kczyapi.com/api.php/provide/vod',
        name: '快车资源'
    },
    16 : {
        api: 'http://apittzy.com/api.php/provide/vod',
        name: '探探资源'
    },
    17 : {
        api: 'http://sdzyapi.com/api.php/provide/vod',
        name: '閃電資源'
    },
    18 : {
        api: 'http://jyzyapi.com/provide/vod',
        name: '金鹰资源'
    },
    19 : {
        api: 'http://api.guangsuapi.com/api.php/provide/vod',
        name: '光速资源'
    },
    20 : {
        api: 'http://aosikazy.com/api.php/provide/vod',
        name: '奥斯卡资源网'
    },
    21 : {
        api: 'http://api.apilyzy.com/api.php/provide/vod',
        name: '老鸭资源采集'
    },
    22 : {
        api: 'http://api.ukuapi.com/api.php/provide/vod',
        name: 'U酷资源'
    },
    23 : {
        api: 'http://m3u8.bdxzyapi.com/api.php/provide/vod',
        name: '北斗星资源'
    },
    24 : {
        api: 'http://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源网'
    },
    25 : {
        api: 'http://sdzyapi.com/api.php/provide/vod',
        name: '闪电资源'
    },
    26 : {
        api: 'http://feisuzy.com/api.php/provide/vod',
        name: '飞速资源'
    },
    27 : {
        api: 'http://www.kuaibozy.com/api.php/provide/vod',
        name: '快播资源'
    },
    28 : {
        api: 'http://api.apibdzy.com/api.php/provide/vod',
        name: '百度资源'
    },
    29 : {
        api: 'http://lovedan.net/api.php/provide/vod',
        name: '艾旦影视'
    },
    30 : {
        api: 'http://www.zzrhgg.com/api.php/provide/vod',
        name: '飘花电影'
    },
    31 : {
        api: 'http://prinevillesda.org/api.php/provide/vod',
        name: '网民电影'
    },
    32 : {
        api: 'http://siwazyw.cc/api.php/provide/vod',
        name: '丝袜资源'
    },
    33 : {
        api: 'http://m3u8.tiankongapi.com/api.php/provide/vod',
        name: '天空資源'
    },
    34 : {
        api: 'http://haiwaikan.com/api.php/provide/vod',
        name: '海外看資源'
    },
    35 : {
        api: 'http://vipmv.cc/api.php/provide/vod',
        name: '天堂资源(官)'
    },
    36 : {
        api: 'http://zy.xiaomaomi.cc/api.php/provide/vod',
        name: '小猫咪(官)'
    },
    37 : {
        api: 'https://caiji.kczyapi.com/api.php/provide/vod',
        name: '快车资源(切)'
    },
    38 : {
        api: 'https://api.foxzyapi.com/api.php/provide/vod',
        name: 'FOX资源(切)'
    },
    39 : {
        api: 'http://cj.lziapi.com/api.php/provide/vod',
        name: '量子资源(切)'
    },
    40 : {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源(切)'
    },
    41 : {
        api: 'https://api.yikanapi.com/api.php/provide/vod',
        name: '易看资源(切)'
    },
    42 : {
        api: 'http://sdzyapi.com/api.php/provide/vod',
        name: '闪电资源(切)'
    },
    43 : {
        api: 'https://api.guangsuapi.com/api.php/provide/vod',
        name: '光速资源(切)'
    },
    44 : {
        api: 'http://api.xinlangapi.com/xinlangapi.php/provide/vod',
        name: '新浪资源(切)'
    },
    45 : {
        api: 'https://api.ylzy1.com/api.php/provide/vod',
        name: '鱼乐资源(切)'
    },
    46 : {
        api: 'http://www.hanjuzy.com/inc/api.php',
        name: '韩剧资源(切)'
    },
    47 : {
        api: 'https://www.77hanju.com/api.php/provide/vod',
        name: '77韩剧(切)'
    },
    48 : {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度资源(切)'
    },
    49 : {
        api: 'https://api.wujinapi.net/api.php/provide/vod',
        name: '无尽资源(切)'
    },
    50 : {
        api: 'https://www.ff9.top/api.php/provide/vod',
        name: 'FF9资源(切)'
    },
    51 : {
        api: 'https://api.ukuapi.com/api.php/provide/vod',
        name: 'U酷资源(优)'
    },
    52 : {
        api: 'https://www.rrvipw.com/api.php/provide/vod',
        name: '789盘(优)'
    },
    53 : {
        api: 'http://175.178.7.35:2020/api.php/provide/vod',
        name: '龙腾资源(优)'
    },
    54 : {
        api: 'https://www.inmi.app/api.php/provide/vod',
        name: '映迷(优)'
    },
    55 : {
        api: 'https://lehootv.com/api.php/provide/vod',
        name: '乐活影视(优)'
    },
    56 : {
        api: 'https://cj.vodimg.top/api.php/provide/vod',
        name: '影图(聚)'
    },
    57 : {
        api: 'http://app.7en7.com/api.php/provide/vod',
        name: '瞬间影视(聚)'
    },
    58 : {
        api: 'https://www.30dian.cn/api.php/provide/vod',
        name: '创艺影视(聚)'
    },
    59 : {
        api: 'http://aliys.cn:90/api.php/provide/vod',
        name: '阿里影视(聚)'
    },
    60 : {
        api: 'http://175.178.7.35:2020/api.php/provide/vod',
        name: '热剧天堂(聚)'
    },
    61 : {
        api: 'https://www.39kan.com/api.php/provide/vod',
        name: '39影视(聚)'
    },
    62 : {
        api: 'https://mgzyz1.com/api.php/provide/vod',
        name: '芒果资源'
    },
    63 : {
        api: 'https://apittzy.com/api.php/provide/vod',
        name: '探探资源'
    },
    64 : {
        api: 'https://api.maozyapi.com/inc/api.php',
        name: '色猫资源'
    },
    65 : {
        api: 'https://caiji.huakuiapi.com/inc/api.php',
        name: '花魁资源'
    },
    66 : {
        api: 'https://api.putaozy.net/inc/api.php',
        name: '葡萄资源'
    },
    67 : {
        api: 'https://sewozyapi.com/api.php/provide/vod',
        name: '色窝资源'
    },
    68 : {
        api: 'https://hghhh.com/api.php/provide/vod',
        name: '皇冠资源'
    },
    69 : {
        api: 'https://api.sexnguon.com/api.php/provide/vod',
        name: '色南国资源'
    },
    70 : {
        api: 'http://sdszyapi.com/home/cjapi/asbb/mc10/vod',
        name: '色屌丝资源'
    },
    71 : {
        api: 'https://52zyapi.com/home/cjapi/asda/mc10/vod',
        name: '52AVAV'
    },
    72 : {
        api: 'http://www.caiji21.com/home/cjapi/klkl/mc10/vod',
        name: '我要啪啪'
    },
    73 : {
        api: 'https://www.caiji22.com/home/cjapi/klp0/mc10/vod',
        name: 'AV集中淫'
    },
    74 : {
        api: 'https://www.caiji23.com/home/cjapi/kls6/mc10/vod',
        name: '夜夜撸资源'
    },
    75 : {
        api: 'http://www.caiji24.com/home/cjapi/p0d2/mc10/vod',
        name: '大屌丝资源'
    },
    76 : {
        api: 'http://www.caiji25.com/home/cjapi/p0as/mc10/vod',
        name: '咪咪资源'
    },
    77 : {
        api: 'http://caiji26.com/home/cjapi/p0g8/mc10/vod',
        name: '鲍鱼AV'
    },
    78 : {
        api: 'https://jgczyapi.com/home/cjapi/kld2/mc10/vod',
        name: '精工厂资源'
    },
    79 : {
        api: 'https://xx55zyapi.com/home/cjapi/ascf/mc10/vod',
        name: '点点娱乐'
    },
    80 : {
        api: 'https://www.dmmapi.com/home/cjapi/asd2c7/mc10/vod',
        name: '大MM资源'
    },
    81 : {
        api: 'https://www.lsjapi.com/home/cjapi/asd2g8/mc10/vod',
        name: '老司鸡资源'
    },
    82 : {
        api: 'https://www.caiji10.com/home/cjapi/cfs6/mc10/vod',
        name: '黄瓜TV资源'
    },
    83 : {
        api: 'https://www.caiji09.com/home/cjapi/cfp0/mc10/vod',
        name: '快播盒子资源'
    },
    84 : {
        api: 'https://www.caiji08.com/home/cjapi/cfkl/mc10/vod',
        name: '大香蕉资源'
    },
    85 : {
        api: 'https://www.caiji07.com/home/cjapi/cfcf/mc10/vod',
        name: '日本AV在线'
    },
    86 : {
        api: 'https://www.caiji05.com/home/cjapi/cfda/mc10/vod',
        name: '青青草视频'
    },
    87 : {
        api: 'https://www.caiji04.com/home/cjapi/cfc7/mc10/vod',
        name: '麻豆视频'
    },
    88 : {
        api: 'https://www.caiji03.com/home/cjapi/cfg8/mc10/vod',
        name: '一本道资源'
    },
    89 : {
        api: 'https://www.caiji02.com/home/cjapi/cfas/mc10/vod',
        name: '草榴视频'
    },
    90 : {
        api: 'https://www.caiji01.com/home/cjapi/cfd2/mc10/vod',
        name: '亚洲成人在线'
    },
    91 : {
        api: 'http://99zy.pw/api.php/provide/vod',
        name: '99资源'
    },
    92 : {
        api: 'https://www.888dav.com/api.php/provide/vod',
        name: '抖阴视频'
    },
    93 : {
        api: 'https://156.249.29.8/inc/api.php',
        name: '蛋蛋视频'
    },
    94 : {
        api: 'https://91md.me/api.php/provide/vod',
        name: '91麻豆'
    },
    95 : {
        api: 'https://www.msnii.com/api/xml.php',
        name: '美少女资源'
    },
    96 : {
        api: 'https://www.xrbsp.com/api/xml.php',
        name: '淫水机资源'
    },
    97 : {
        api: 'https://www.gdlsp.com/api/xml.php',
        name: '香奶儿资源'
    },
    98 : {
        api: 'https://www.kxgav.com/api/xml.php',
        name: '白嫖资源'
    },
    99 : {
        api: 'https://www.afasu.com/api/xml.php',
        name: '小湿妹资源'
    },
    100: {
        api: 'https://www.pgxdy.com/api/xml.php',
        name: '黄AV资源'
    },
    101: {
        api: 'https://dadiapi.com/api.php',
        name: '大地资源'
    },
    102: {
        api: 'http://www.feifei67.com/api.php/provide/vod',
        name: 'CK资源'
    },
    103: {
        api: 'https://api.apilyzy.com/api.php/provide/vod',
        name: '老鸭资源'
    },
    104: {
        api: 'https://apilj.com/api.php/provide/vod',
        name: '辣椒资源'
    },
    105: {
        api: 'https://lbapi9.com/api.php/provide/vod',
        name: '乐播资源'
    },
    106: {
        api: 'http://bttcj.com/inc/sapi.php',
        name: '博天堂'
    },
    107: {
        api: 'http://secj8.com/inc/sapi.php',
        name: '色色资源'
    },
    108: {
        api: 'http://jcspcj8.com/api',
        name: '久草资源'
    },
    109: {
        api: 'http://cjmygzy.com/inc/sapi.php',
        name: '狼少年'
    },
    110: {
        api: 'http://f2dcj6.com/sapi',
        name: '富二代资源'
    },
    111: {
        api: 'http://zmcj88.com/sapi',
        name: '字幕网'
    },
    112: {
        api: 'http://llzxcj.com/inc/sck.php',
        name: '利来资源'
    },
    113: {
        api: 'http://fhapi9.com/api.php/provide/vod',
        name: '番号资源'
    },
    114: {
        api: 'https://shayuapi.com/api.php/provide/vod',
        name: '鲨鱼资源'
    },
    115: {
        api: 'http://www.ggmmzy.com:9999/inc/xml',
        name: '速度资源'
    },
    116: {
        api: 'https://kkzy.me/api.php/provide/vod',
        name: 'KK写真资源'
    },
    117: {
        api: 'https://api.tiankongapi.com/api.php/provide/vod',
        name: '天空云'
    },
    118: {
        api: 'http://cj.bajiecaiji.com/inc/bjm3u8.php',
        name: '八戒云'
    },
    119: {
        api: 'http://wmcj8.com/inc/sapi.php?ac=videolist',
        name: '(18+不错)环亚资源'
    },
    120: {
        api: 'http://www.ggmmzy.com:9999/inc/xml',
        name: '(18+)速度资源'
    },
    121: {
        api: 'https://www.mgav1.cc/api.php/provide/vod',
        name: '芒果18+(动漫不错)'
    },
    122: {
        api: 'https://www.msnii.com/api/xml.php',
        name: '美少女资源(已修复)'
    },
    123: {
        api: 'https://www.xrbsp.com/api/xml.php',
        name: '淫水机资源(已修复)'
    },
    124: {
        api: 'https://www.gdlsp.com/api/xml.php',
        name: '香奶儿资源(已修复)'
    },
    125: {
        api: 'https://www.kxgav.com/api/xml.php',
        name: '白嫖资源(已修复)'
    },
    126: {
        api: 'https://www.afasu.com/api/xml.php',
        name: '小湿妹资源(已修复)'
    },
    127: {
        api: 'https://www.pgxdy.com/api/xml.php',
        name: '黄AV资源(已修复)'
    },
    128: {
        api: 'https://caiji.naichaapi.com/inc/api.php',
        name: '奶茶资源(已修复)'
    },
    129: {
        api: 'https://yinlong.tv/api.php/provide/vod',
        name: '银龙资源(已修复)'
    },
    130: {
        api: 'https://caiji.caomeiapi.com/inc/api.php',
        name: '草莓资源(新增)'
    },
    131: {
        api: 'http://f2dcj6.com/sapi/?ac=videolist',
        name: '(18+)富二代资源'
    },
    132: {
        api: 'https://www.4000zy.com/inc/api.php',
        name: '18+(良)4000资源'
    },
    133: {
        api: 'http://51smt4.xyz/api.php/provide/vod',
        name: '18+(不错)水蜜桃'
    },
    134: {
        api: 'http://bttcj.com/inc/sapi.php',
        name: '博天堂18x'
    },
    135: {
        api: 'https://shayuapi.com/api.php/Seacms/vod',
        name: '鲨鱼18+'
    },
    136: {
        api: 'https://caiji.523zyw.com/inc/api.php',
        name: '(18+)523资源'
    },
    137: {
        api: 'https://bttcj.com/inc/sapi.php',
        name: '(18+)天堂福利'
    },
    138: {
        api: 'https://apittzy.com/api.php/provide/vod',
        name: '(18+)探探资源'
    },
    139: {
        api: 'https://api.xiuseapi.com/api.php/provide/vod',
        name: '(18+)秀色资源'
    },
    140: {
        api: 'http://llzxcj.com/inc/sck.php?ac=videolist',
        name: '(18+)利来资源'
    },
    141: {
        api: 'http://zmcj88.com/sapi?ac=videolist',
        name: '(18+)字幕网'
    },
    142: {
        api: 'http://mygzycj.com/api.php?ac=list',
        name: '(18+)JAV名优'
    },
    143: {
        api: 'http://secj8.com/inc/sapi.php?ac=videolist',
        name: '(18+)SS资源'
    },
    144: {
        api: 'https://dadiapi.com/api.php',
        name: '(18+)大地资源'
    },
    145: {
        api: 'https://lbapi9.com/api.php/provide/vod',
        name: '(18+)乐播'
    },
    146: {
        api: 'http://cjmygzy.com/inc/sapi.php?ac=videolist',
        name: '(18+)狼少年'
    },
    147: {
        api: 'http://fhapi9.com/api.php/provide/vod',
        name: '(18+)番号资源'
    },
    148: {
        api: 'https://api.maozyapi.com/inc/api.php',
        name: '(18+)S猫资源'
    },
    149: {
        api: 'http://www.010aizy.com/API/maxs.php',
        name: '(18+)100ai'
    },
    150: {
        api: 'http://api.suboapi.com/api.php/provide/vod',
        name: '(18+)速播资源'
    },
    151: {
        api: 'https://caiji.523zyw.com/inc/apijson_vod.php',
        name: '523资源'
    },
    152: {
        api: 'https://siwazyw.cc/api.php/provide/vod',
        name: '丝袜资源'
    },
    153: {
        api: 'https://www.leyuzyapi.com/inc/apijson_vod.php',
        name: '乐鱼资源'
    },
    154: {
        api: 'http://51smt4.xyz/api.php/provide/vod',
        name: '水蜜桃'
    },
    155: {
        api: 'https://api.xiuseapi.com/api.php/provide/vod',
        name: '秀色资源'
    },
    156: {
        api: 'https://api.maozyapi.com/inc/apijson_vod.php',
        name: '色猫资源'
    },
    157: {
        api: 'https://caiji.caomeiapi.com/inc/apijson_vod.php',
        name: '草莓资源'
    },
    158: {
        api: 'http://www.aikanzyz9.com/inc/apijson_vod.php',
        name: '爱看资源'
    },
    159: {
        api: 'https://caiji.huakuiapi.com/inc/apijson_vod.php',
        name: '花魁资源'
    },
    160: {
        api: 'https://api.putaozy.net/inc/apijson_vod.php',
        name: '葡萄资源'
    },
    161: {
        api: 'https://api.yinwoapi.com/api.php/provide/vod',
        name: '淫窝资源'
    },
    162: {
        api: 'https://www.4000zy.com/inc/apijson_vod.php',
        name: '4000资源'
    },
    163: {
        api: 'https://xjjzyapi.com/home/cjapi/askl/mc10/vod',
        name: '小姐姐资源'
    },
    164: {
        api: 'https://www.caiji06.com/home/cjapi/cfbb/mc10/vod',
        name: '久久热在线'
    },
    165: {
        api: 'http://www.987caiji.com/api/max.php',
        name: '天噜啦资源'
    },
    166: {
        api: 'http://www.010aizy.com/API/macs.php',
        name: '010爱资源'
    },
    167: {
        api: 'https://javcaptain.com/api.php/provide/vod',
        name: '痴汉队长'
    },
    168: {
        api: 'https://madouse.la/api.php/provide/vod',
        name: '麻豆视频2'
    },
    169: {
        api: 'https://aicaozy.com/api.php/provide/vod',
        name: '爱操资源'
    },
    170: {
        api: 'http://langchaozy6.com/api.php/provide/vod',
        name: '浪潮资源'
    },
    171: {
        api: 'https://api.suboapi.com/api.php/provide/vod',
        name: '速播资源'
    },
    172: {
        api: 'https://kudouzy.com/api.php/provide/vod',
        name: '酷豆资源'
    },
    173: {
        api: 'https://api.kdapi.info/api.php/provide/vod',
        name: '酷豆2'
    },
    174: {
        api: 'https://api.kudian70.com/api.php/provide/vod',
        name: '酷伦理'
    },
    175: {
        api: 'https://api.ykapi.net/api.php/provide/vod',
        name: '影库资源'
    },
    176: {
        api: 'https://wanying4.com/api.php/provide/vod',
        name: '万影色'
    },
    177: {
        api: 'https://yinlong.tv/api.php/provide/vod',
        name: '银龙资源'
    },
    178: {
        api: 'https://caiji.naichaapi.com/inc/apijson_vod.php',
        name: '奶茶资源'
    },
    179: {
        api: 'https://cj.apiabzy.com/api.php/provide/vod',
        name: '爱播资源'
    },
    180: {
        api: 'https://www.pgxdy.com/api/json.php',
        name: '黄AV资源'
    },
    181: {
        api: 'https://apihjzy.com/api.php/provide/vod',
        name: '花椒资源'
    },
    182: {
        api: 'http://wmcj8.com/inc/sapi.php',
        name: '环亚资源'
    },
    183: {
        api: 'http://mygzycj.com/api.php?ac=videolist',
        name: 'JAV名优馆'
    },
    184: {
        api: 'http://m.7777688.com/inc/apijson.php',
        name: 'AVZY6888资源'
    },
    185: {
        api: 'http://secj8.com/inc/sapi.php?ac=videolist',
        name: '色色资源'
    },
    186: {
        api: 'http://99zywcj.com/inc/sapi.php?ac=videolist',
        name: '玖玖资源'
    },
    187: {
        api: 'http://jcspcj8.com/api?ac=videolist',
        name: '久草资源'
    },
    188: {
        api: 'http://cjmygzy.com/inc/sapi.php?ac=videolist',
        name: '狼少年'
    },
    189: {
        api: 'http://f2dcj6.com/sapi?ac=videolist',
        name: '富二代资源'
    },
    190: {
        api: 'http://zmcj88.com/sapi?ac=videolist',
        name: '字幕网'
    },
    191: {
        api: 'http://llzxcj.com/inc/sck.php?ac=videolist',
        name: '利来资源'
    },
    192: {
        api: 'http://www.jializyzapi.com/api.php/provide/vod',
        name: '佳丽资源'
    },
    193: {
        api: 'https://jgczyapi.com/home/cjapi/kld2/mc/vod',
        name: '精工厂'
    },
    194: {
        api: 'https://yyff.540734621.xyz/api.php/provide/vod',
        name: '业余|点播'
    },
    195: {
        api: 'https://hw8.live/api.php/provide/vod',
        name: '华为吧|点播'
    },
    196: {
        api: 'https://iqyi.xiaohuangrentv.com/api.php/provide/vod',
        name: '小黄人|点播'
    },
    197: {
        api: 'https://api.niuniuzy.me/api.php/provide/vod',
        name: '牛牛|点播'
    },
    198: {
        api: 'https://cj.yayazy.net/api.php/provide/vod',
        name: '丫丫|点播'
    },
    199: {
        api: 'https://api.ukuapi.com/api.php/provide/vod',
        name: 'U酷|点播'
    },
    200: {
        api: 'https://hhzyapi.com/api.php/provide/vod',
        name: '豪华|点播'
    },
    201: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速|点播'
    },
    202: {
        api: 'https://49zyw.com/api.php/provide/vod',
        name: '四九|点播'
    },
    203: {
        api: 'https://suoniapi.com/api.php/provide/vod',
        name: '索尼|点播'
    },
    204: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'ikun|点播'
    },
    205: {
        api: 'http://cj.ffzyapi.com/api.php/provide/vod',
        name: '非凡|点播'
    },
    206: {
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: '量子|点播'
    },
    207: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风|点播'
    },
    208: {
        api: 'https://www.hongniuzy2.com/api.php/provide/vod',
        name: '红牛|点播'
    },
    209: {
        api: 'https://www.feisuzyapi.com/api.php/provide/vod',
        name: '飞速|点播'
    },
    210: {
        api: 'https://www.kuaikan-api.com/api.php/provide/vod',
        name: '快看|点播'
    },
    211: {
        api: 'https://xzcjz.com/api.php/provide/vod',
        name: '熊掌|点播'
    },
    212: {
        api: 'https://caiji.kczyapi.com/api.php/provide/vod',
        name: '快车|点播'
    },
    213: {
        api: 'http://sdzyapi.com/api.php/provide/vod',
        name: '闪电|点播'
    },
    214: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花|点播'
    },
    215: {
        api: 'https://collect.wolongzyw.com/api.php/provide/vod',
        name: '卧龙|点播'
    },
    216: {
        api: 'http://www.ahjiuman.com/api.php/provide/vod',
        name: '飘花|点播'
    },
    217: {
        api: 'https://www.911ysw.top/tianyi.php/provide/vod',
        name: '天翼|点播'
    },
    218: {
        api: 'https://www.huyaapi.com/api.php/provide/vod',
        name: '虎牙|点播'
    },
    219: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度|点播'
    },
    220: {
        api: 'https://p2100.net/api.php/provide/vod',
        name: '飘零|点播'
    },
    221: {
        api: 'https://api.wujinapi.com/api.php/provide/vod',
        name: '无尽|点播'
    },
    222: {
        api: 'https://subocaiji.com/api.php/provide/vod',
        name: '速博|点播'
    },
    223: {
        api: 'https://caiji.moduapi.cc/api.php/provide/vod',
        name: '魔都|点播'
    },
    224: {
        api: 'http://zuidazy.me/api.php/provide/vod',
        name: '最大|点播'
    },
    225: {
        api: 'https://caiji.qhzyapi.com/api.php/provide/vod',
        name: '奇虎|点播'
    },
    226: {
        api: 'https://hhzyapi.com/api.php/provide/vod',
        name: '火狐|点播'
    },
    227: {
        api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod',
        name: '新浪|点播'
    },
    228: {
        api: 'https://www.kuaiyunzy.com/api.php/provide/vod',
        name: '快云|点播'
    },
    229: {
        api: 'https://www.partnersky-horoskop.com/api.php/provide/vod',
        name: '成人影视1'
    },
    230: {
        api: 'https://api.apilyzy.com/api.php/provide/vod',
        name: '成人影视2'
    },
    231: {
        api: 'http://bttcj.com/inc/sapi.php',
        name: '成人影视3'
    },
    232: {
        api: 'https://apittzy.com/api.php/provide/vod',
        name: '成人影视4'
    },
    233: {
        api: 'https://lbapi9.com/api.php/provide/vod',
        name: '成人影视5'
    },
    234: {
        api: 'https://caiji.putaozy.net/inc/apijson_vod.php',
        name: '成人影视6'
    },
    235: {
        api: 'https://caiji.huakuiapi.com/inc/apijson_vod.php',
        name: '花魁影视'
    },
    236: {
        api: 'https://www.msnii.com/api/xml.php',
        name: '美少女'
    },
    237: {
        api: 'https://xx55zyapi.com/home/cjapi/ascf/mc/vod',
        name: '点点色色'
    },
    238: {
        api: 'https://sdszyapi.com/home/cjapi/asbb/sea/vod',
        name: '屌丝绿茶'
    },
    239: {
        api: 'http://www.ggmmzy.com:9999/inc/xml',
        name: '哥哥妹妹'
    },
    240: {
        api: 'https://www.xrbsp.com/api/xml.php',
        name: '淫水机'
    },
    241: {
        api: 'https://www.afasu.com/api/xml.php',
        name: '小湿妹'
    },
    242: {
        api: 'https://www.gdlsp.com/api/xml.php',
        name: '香奶儿'
    },
    243: {
        api: 'https://caiji.523zyw.com/inc/api.php',
        name: '523av'
    },
    244: {
        api: 'https://91md.me/api.php/provide/vod',
        name: '91麻豆源'
    },
    245: {
        api: 'https://api.vodkok2.com/api.php/provide/vod',
        name: 'KOK资源'
    },
    246: {
        api: 'https://jkunzyapi.com/api.php/provide/vod',
        name: '鸡坤资源'
    },
    247: {
        api: 'http://dadiapi.com/api.php',
        name: '成人one'
    },
    248: {
        api: 'https://apiyutu.com/api.php/provide/vod',
        name: '玉兔采集'
    },
    249: {
        api: 'https://slapibf.com/api.php/provide/vod',
        name: '森林采集'
    },
    250: {
        api: 'https://dadiapi.com/api.php',
        name: '大地采集'
    },
    251: {
        api: 'https://caiji.semaozy.net/inc/apijson_vod.php',
        name: '色猫采集'
    },
    252: {
        api: 'http://fhapi9.com/api.php/provide/vod',
        name: '番外采集'
    },
    253: {
        api: 'https://155api.com/api.php/provide/vod',
        name: '??福利采集??'
    },
    254: {
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: '量子'
    },
    255: {
        api: 'http://cj.ffzyapi.com/api.php/provide/vod',
        name: '非凡'
    },
    256: {
        api: 'http://www.fenwe.tk:5700/vod?rule=玩偶姐姐&ext=txt/js/18/玩偶姐姐.js',
        name: '玩偶姐姐(道长)'
    },
    257: {
        api: 'http://www.fenwe.tk:5700/vod?rule=18av&ext=txt/js/18/18av.js',
        name: '18av(道长)'
    },
    258: {
        api: 'http://www.fenwe.tk:5700/vod?rule=banan&ext=txt/js/18/banan.js',
        name: 'banan(道长)'
    },
    259: {
        api: 'http://www.fenwe.tk:5700/vod?rule=Missav&ext=txt/js/18/Missav.js',
        name: 'Missav(道长)'
    },
    260: {
        api: 'http://www.fenwe.tk:5700/vod?rule=养端&ext=txt/js/18/养端.js',
        name: '养端(道长)'
    },
    261: {
        api: 'http://www.fenwe.tk:5700/vod?rule=吸瓜&ext=txt/js/18/吸瓜.js',
        name: '吸瓜(道长)'
    },
    262: {
        api: 'http://www.fenwe.tk:5700/vod?rule=朱古力&ext=txt/js/18/朱古力.js',
        name: '朱古力(道长)'
    },
    263: {
        api: 'http://www.caiji25.com/home/cjapi/p0as/mc10/vod',
        name: '咪咪'
    },
    264: {
        api: 'https://www.kxgav.com/api/xml.php',
        name: '白嫖'
    },
    265: {
        api: 'https://www.pgxdy.com/api/xml.php',
        name: '黄AV'
    },
    266: {
        api: 'https://caiji.naichaapi.com/inc/api.php',
        name: '奶茶'
    },
    267: {
        api: 'https://api.kudian70.com/api.php/provide/vod',
        name: '酷伦'
    },
    268: {
        api: 'https://api.ykapi.net/api.php/provide/vod',
        name: '影库'
    },
    269: {
        api: 'https://api.putaozy.net/inc/apijson_vod.php',
        name: '葡萄'
    },
    270: {
        api: 'https://lbapi9.com/api.php/provide/vod',
        name: '老鸭2'
    },
    271: {
        api: 'http://www.987caiji.com/api/max.php',
        name: '天噜啦'
    },
    272: {
        api: 'http://www.010aizy.com/API/maxs.php',
        name: '100ai18x'
    },
    273: {
        api: 'https://caiji.naichaapi.com/inc/api.php',
        name: '奶茶av'
    },
    274: {
        api: 'https://apittzy.com/api.php/provide/vod',
        name: '探探av'
    },
    275: {
        api: 'https://www.caiji08.com/home/cjapi/cfkl/mc10/vod',
        name: '大香蕉'
    },
    276: {
        api: 'https://caiji.caomeiapi.com/inc/api.php',
        name: '草莓资源'
    },
    277: {
        api: 'http://secj8.com/inc/api.php?ac=videolist',
        name: '色色资源'
    },
    278: {
        api: 'http://bttcj.com/inc/sapi.php?ac=videolist',
        name: '博天堂三级'
    },
    279: {
        api: 'http://www.jializyzapi.com/api.php/provide/vod',
        name: '佳丽'
    },
    280: {
        api: 'http://cjmygzy.com/inc/sapi.php?ac=videolist',
        name: '狼少年资源'
    },
    281: {
        api: 'http://99zywcj.com/inc/sck.php?ac=videolist',
        name: '玖玖'
    },
    282: {
        api: 'http://mygzycj.com/sapi.php?ac=videolist',
        name: 'JAV名优'
    },
    283: {
        api: 'https://api.apilyzy.com/api.php/provide/vod',
        name: '花椒资源'
    },
    284: {
        api: 'https://api.apilyzy.com/api.php/provide/vod',
        name: '老鸭福利'
    },
    285: {
        api: 'https://bttcj.com/inc/sapi.php',
        name: '天堂福利'
    },
    286: {
        api: 'http://wmcj8.com/inc/sapi.php?ac=videolist',
        name: '环亚资源'
    },
    287: {
        api: 'http://mygzycj.com/api.php?ac=list',
        name: 'JAV名优'
    },
    288: {
        api: 'http://secj8.com/inc/sapi.php?ac=videolist',
        name: 'SS资源'
    },
    289: {
        api: 'https://lbapi9.com/api.php/provide/vod',
        name: '乐播'
    },
    290: {
        api: 'http://f2dcj6.com/sapi/?ac=videolist',
        name: '富二代资源'
    },
    291: {
        api: 'https://api.maozyapi.com/inc/api.php',
        name: 'S猫资源'
    },
    292: {
        api: 'https://www.pgxdy.com/api/xml.php',
        name: '小AV'
    },
    293: {
        api: 'https://cj.apiabzy.com/api.php/provide/vod',
        name: '爱播av'
    },
    294: {
        api: 'https://caiji.523zyw.com/inc/api.php',
        name: '523资源'
    },
    295: {
        api: 'http://bttcj.com/inc/sapi.php',
        name: 'BT天堂'
    },
    296: {
        api: 'http://51smt4.xyz/api.php/provide/vod',
        name: '成人01'
    },
    297: {
        api: 'http://jcspcj8.com/api?ac=videolist',
        name: '成人02'
    },
    298: {
        api: 'http://bttcj.com/inc/sapi.php',
        name: '成人03'
    },
    299: {
        api: 'http://cjmygzy.com/inc/sapi.php?ac=videolist',
        name: '成人04'
    },
    300: {
        api: 'http://91md.me/api.php/provide/vod',
        name: '成人05'
    },
    301: {
        api: 'http://dadiapi.com/api.php',
        name: '成人06'
    },
    302: {
        api: 'http://secj8.com/inc/sapi.php?ac=videolist',
        name: '成人07'
    },
    303: {
        api: 'http://api.putaozy.net/inc/apijson_vod.php',
        name: '成人08'
    },
    304: {
        api: 'http://llzxcj.com/inc/sck.php?ac=videolist',
        name: '成人09'
    },
    305: {
        api: 'http://apilj.com/api.php/provide/vod',
        name: '成人10'
    },
    306: {
        api: 'http://f2dcj6.com/sapi?ac=videolist',
        name: '成人11'
    },
    307: {
        api: 'http://99zy.pw/api.php/provide/vod',
        name: '成人12'
    },
    308: {
        api: 'http://www.ggmmzy.com:9999/inc/xml',
        name: '成人13'
    },
    309: {
        api: 'http://fhapi9.com/api.php/provide/vod',
        name: '成人14'
    },
    310: {
        api: 'http://www.feifei67.com/api.php/provide/vod',
        name: '成人15'
    },
    311: {
        api: 'http://sdszyapi.com/home/cjapi/asbb/mc10/vod',
        name: '成人16'
    },
    312: {
        api: 'http://madouse.la/api.php/provide/vod',
        name: '成人17'
    },
    313: {
        api: 'http://xjjzyapi.com/home/cjapi/askl/mc10/vod',
        name: '成人18'
    },
    314: {
        api: 'http://www.shabizy.com:777/inc/sea',
        name: '成人19'
    },
    315: {
        api: 'http://www.caiji21.com/home/cjapi/klkl/mc10/vod',
        name: '成人20'
    },
    316: {
        api: 'http://www.caiji25.com/home/cjapi/p0as/mc10/vod',
        name: '成人21'
    },
    317: {
        api: 'http://caiji26.com/home/cjapi/p0g8/mc10/vod',
        name: '成人22'
    },
    318: {
        api: 'http://www.caiji24.com/home/cjapi/p0d2/mc10/vod',
        name: '成人23'
    },
    319: {
        api: 'http://lbapiby.com/api.php/provide/vod',
        name: '成人24'
    },
    320: {
        api: 'https://api.maozyapi.com/inc/apijson_vod.php',
        name: '成人25'
    },
    321: {
        api: 'https://www.888dav.com/api.php/provide/vod',
        name: '成人26'
    },
    322: {
        api: 'https://www.mgav1.cc/api.php/provide/vod',
        name: '成人27'
    },
    323: {
        api: 'https://mgzyz1.com/api.php/provide/vod',
        name: '成人28'
    },
    324: {
        api: 'https://www.msnii.com/api/xml.php',
        name: '成人29'
    },
    325: {
        api: 'https://kkzy.me/api.php/provide/vod',
        name: '成人30'
    },
    326: {
        api: 'https://caiji.huakuiapi.com/inc/apijson_vod.php',
        name: '成人31'
    },
    327: {
        api: 'https://siwazyw.cc/api.php/provide/vod',
        name: '成人32'
    },
    328: {
        api: 'https://www.pgxdy.com/api/xml.php',
        name: '成人33'
    },
    329: {
        api: 'https://api.sexnguon.com/api.php/provide/vod',
        name: '成人34'
    },
    330: {
        api: 'https://www.dmmapi.com/home/cjapi/asd2c7/mc10/vod',
        name: '成人35'
    },
    331: {
        api: 'https://xx55zyapi.com/home/cjapi/ascf/mc10/vod',
        name: '成人36'
    },
    332: {
        api: 'https://www.kxgav.com/api/xml.php',
        name: '成人37'
    },
    333: {
        api: 'https://www.caiji02.com/home/cjapi/cfas/mc10/vod',
        name: '成人38'
    },
    334: {
        api: 'https://www.xrbsp.com/api/xml.php',
        name: '成人39'
    },
    335: {
        api: 'https://www.caiji07.com/home/cjapi/cfcf/mc10/vod',
        name: '成人40'
    },
    336: {
        api: 'https://lbapi9.com/api.php/provide/vod',
        name: '成人41'
    },
    337: {
        api: 'https://www.caiji03.com/home/cjapi/cfg8/mc10/vod',
        name: '成人42'
    },
    338: {
        api: 'https://www.caiji08.com/home/cjapi/cfkl/mc10/vod',
        name: '成人43'
    },
    339: {
        api: 'https://www.caiji10.com/home/cjapi/cfs6/mc10/vod',
        name: '成人44'
    },
    340: {
        api: 'https://52zyapi.com/home/cjapi/asda/mc10/vod',
        name: '成人45'
    },
    341: {
        api: 'https://apittzy.com/api.php/provide/vod',
        name: '成人46'
    },
    342: {
        api: 'https://api.xiuseapi.com/api.php/provide/vod',
        name: '成人47'
    },
    343: {
        api: 'https://www.caiji01.com/home/cjapi/cfd2/mc10/vod',
        name: '成人48'
    },
    344: {
        api: 'https://www.caiji22.com/home/cjapi/klp0/mc10/vod',
        name: '成人49'
    },
    345: {
        api: 'https://www.caiji23.com/home/cjapi/kls6/mc10/vod',
        name: '成人50'
    },
    346: {
        api: 'https://www.afasu.com/api/xml.php',
        name: '成人51'
    },
    347: {
        api: 'https://hghhh.com/api.php/provide/vod',
        name: '成人52'
    },
    348: {
        api: 'https://sewozyapi.com/api.php/provide/vod',
        name: '成人53'
    },
    349: {
        api: 'https://www.gdlsp.com/api/xml.php',
        name: '成人54'
    },
    350: {
        api: 'https://www.caiji04.com/home/cjapi/cfc7/mc10/vod',
        name: '成人55'
    },
    351: {
        api: 'https://www.caiji09.com/home/cjapi/cfp0/mc10/vod',
        name: '成人56'
    },
    352: {
        api: 'https://www.caiji05.com/home/cjapi/cfda/mc10/vod',
        name: '成人57'
    },
    353: {
        api: 'https://jgczyapi.com/home/cjapi/kld2/mc10/vod',
        name: '成人58'
    },
    354: {
        api: 'https://caiji.caomeiapi.com/inc/apijson_vod.php',
        name: '成人59'
    },
    355: {
        api: 'https://caiji.523zyw.com/inc/apijson_vod.php',
        name: '成人60'
    },
    356: {
        api: 'https://caiji.naichaapi.com/inc/apijson_vod.php',
        name: '成人61'
    },
    357: {
        api: 'https://api.apilyzy.com/api.php/provide/vod',
        name: '成人62'
    },
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
