/* ==================================================================
   这里集中放"你的简历内容"。
   下面全部是示例文案 + 占位数据，替换成你的真实信息即可，
   不需要改动任何组件代码。
   ================================================================== */

export const site = {
  title: '个人作品集',
  year: '2026',
}

export const profile = {
  name: '林述',
  latinName: 'LIN SHU',
  roleLine: '视觉设计师 / AI 设计师 / 品牌设计师',
  location: '上海 · 可远程协作',
  availability: '现可承接新项目',
  // 人物图：把图片放进 public/media/，然后填 '/media/portrait.jpg'
  avatar: '',
  avatarCaption: 'Portrait / Studio, Shanghai',
  // 首屏大标题，一行一个数组项
  headline: ['让品牌的', '每一次出现', '都值得被记住'],
  heroNote:
    '8 年品牌与视觉设计经验，专注品牌视觉系统、AIGC 创意工作流与视觉落地。习惯把"策略—概念—执行"放在同一条线上推进。',
}

export const nav = [
  { label: '精选项目', href: '#work' },
  { label: '个人经历', href: '#about' },
  { label: '个人优势', href: '#strengths' },
  { label: '联系方式', href: '#contact' },
]

/* 各区块的标题文案 */
export const sections = {
  work: {
    index: '01',
    label: '精选项目',
    title: ['作品不只是好看，', '还要被记住。'],
    note: '下面 4 个案例，覆盖品牌从 0 到 1、视觉系统升级、AIGC 创意落地三类最常见的需求。',
  },
  about: {
    index: '02',
    label: '个人经历',
    title: ['设计是判断力，', '不是素材量。'],
    note: '8 年横跨品牌、产品与营销物料，最近三年把生成式 AI 正式接进设计流程。',
  },
  strengths: {
    index: '03',
    label: '个人优势',
    title: ['不只是会做图，', '而是能把事情做完。'],
    note: '六项能力覆盖从前期判断到最终落地的完整链路。',
  },
}

export const marquee = [
  '品牌视觉系统',
  'AIGC 创意工作流',
  '视觉识别 VI',
  'KV 主视觉',
  '动效与交互',
  '三维与合成',
]

export const stats = [
  { value: 8, suffix: '年', label: '品牌与视觉设计经验' },
  { value: 60, suffix: '+', label: '落地项目' },
  { value: 20, suffix: '+', label: '服务品牌' },
  { value: 12, suffix: '+', label: '覆盖行业' },
]

export const intro = [
  '我是林述，一名同时做品牌策略、视觉设计与 AI 创意工作流的设计师。过去 8 年，我一直在品牌与产品之间工作：从 0 到 1 搭一套视觉系统，也把一个概念推到能上线的最终物料。',
  '最近三年，我把生成式 AI 正式接进设计流程——用可控的工作流做概念探索与画面量产，把重复劳动交给工具，把判断力留给设计本身。这让原本两周的探索周期压缩到两三天，同时保持输出质量的一致性。',
  '我关心的是记忆点：一个品牌凭什么被记住，以及这套视觉能不能在两年后依然站得住。',
]

export const contacts = [
  { label: '邮箱', value: 'hello@linshu.design', href: 'mailto:hello@linshu.design' },
  { label: '微信', value: 'linshu_design', href: '#' },
  { label: '电话', value: '+86 138 0000 0000', href: 'tel:+8613800000000' },
  { label: 'Behance', value: 'behance.net/linshu', href: '#' },
]

/* 精选项目：cover 留空时会展示设计过的占位视觉（带"示例图 · 待替换"标记） */
export const projects = [
  {
    id: 'p1',
    index: '01',
    title: 'VERA 智能硬件',
    subtitle: '品牌视觉系统 / 全案',
    year: '2025',
    role: '品牌视觉主设计',
    description:
      '为一个 AI 硬件新品牌建立从标识到产品视觉的完整体系：把"冷静、精密、可亲近"这三个关键词，翻译成一套可延展的图形、色彩与影像语言。',
    tags: ['品牌识别', '视觉系统', '产品影像'],
    cover: '',
    tone: ['#1b2c6b', '#6e8cff'],
    link: '#',
  },
  {
    id: 'p2',
    index: '02',
    title: 'NOVA 年度发布',
    subtitle: 'KV 主视觉 / AIGC 创意',
    year: '2025',
    role: '创意与视觉负责人',
    description:
      '用 AIGC 工作流完成 40+ 张主视觉与物料延展，在 6 周内支持了全球 5 个市场的同步发布，整体视觉保持一致性的同时保留地域差异。',
    tags: ['AIGC', '主视觉', '物料延展'],
    cover: '',
    tone: ['#123f3a', '#63e6d0'],
    link: '#',
  },
  {
    id: 'p3',
    index: '03',
    title: 'MORI 生活方式',
    subtitle: '品牌重塑 / 包装体系',
    year: '2024',
    role: '品牌与包装设计',
    description:
      '一个自然生活方式品牌的重塑。重新梳理产品线与视觉层级，用克制的材质与排版，把品牌从"温和"推进到"有主张"。',
    tags: ['品牌重塑', '包装设计', '排版系统'],
    cover: '',
    tone: ['#3a2418', '#d9a06a'],
    link: '#',
  },
  {
    id: 'p4',
    index: '04',
    title: 'Lumen 数据平台',
    subtitle: '产品视觉 / 设计系统',
    year: '2024',
    role: '视觉与设计系统',
    description:
      '为 B 端数据平台搭建视觉语言与设计系统，处理高密度信息下的可读性问题，让工具型界面也拥有明确的品牌气质。',
    tags: ['产品视觉', '设计系统', '信息层级'],
    cover: '',
    tone: ['#241a3f', '#a58bff'],
    link: '#',
  },
]

/* 个人优势：6 张卡片 */
export const strengths = [
  {
    index: '01',
    icon: 'compass',
    title: '品牌策略与视觉定义',
    text: '能把模糊的品牌感觉拆成可执行的关键词、图形逻辑与视觉规则，让设计有依据、可讨论、能延续。',
    tags: ['定位梳理', '视觉语言', '规范输出'],
  },
  {
    index: '02',
    icon: 'layers',
    title: '完整的视觉系统能力',
    text: '从标识、字体、色彩到影像与排版规则，输出能被团队直接使用的系统，而不只是一套好看的稿子。',
    tags: ['VI 系统', '设计规范', '组件化'],
  },
  {
    index: '03',
    icon: 'spark',
    title: 'AIGC 创意工作流',
    text: '搭建可控的生成式流程：风格参考、提示结构、批量出图与后期统一，把探索周期压缩到以天为单位。',
    tags: ['ComfyUI', '风格控制', '批量生产'],
  },
  {
    index: '04',
    icon: 'motion',
    title: '动效与视觉叙事',
    text: '用动效解决信息节奏问题——让发布、演示与产品体验拥有统一的语气，而不是零散的转场堆叠。',
    tags: ['动态视觉', '交互反馈', '演示叙事'],
  },
  {
    index: '05',
    icon: 'cube',
    title: '三维与影像合成',
    text: '能把二维概念推进到有质感的成品画面，在预算和周期内选择最合适的技术路径。',
    tags: ['三维渲染', '合成修图', '产品影像'],
  },
  {
    index: '06',
    icon: 'users',
    title: '跨团队协作与推进',
    text: '习惯与产品、市场、供应链同频工作，能把设计意图翻译成各方都听得懂的语言并推到落地。',
    tags: ['需求沟通', '项目推进', '落地验收'],
  },
]

export const closing = {
  eyebrow: '04 / 联系方式',
  title: ['一起做点', '有意思的事'],
  note: '不管是品牌从 0 到 1、视觉系统升级，还是想把 AI 接进设计流程，都欢迎直接联系我。通常 24 小时内回复。',
  email: 'hello@linshu.design',
  responseTime: '24 小时内',
  actions: [
    { label: '发送邮件', href: 'mailto:hello@linshu.design' },
    { label: '微信联系', href: '#' },
  ],
  socials: [
    { label: 'Behance', href: '#' },
    { label: '小红书', href: '#' },
    { label: '站酷', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ],
}
