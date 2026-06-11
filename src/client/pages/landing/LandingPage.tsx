import { Avatar, Button, Dropdown, Flex, Tag, Typography } from 'antd'
import { LogIn, LogOut, MessageCircle, Package, ShieldCheck, ShoppingBag, Sparkles, User, Utensils } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

const qrCodeUrl = 'https://fstc.kispace.cc/i/ec2458d7f65f16141b1c478aadc45da3.jpg'

const imageUrls = {
  hero: 'https://fstc.kispace.cc/i/3ba5cc6dd53dbe95d7264add0277f7b8.jpg',
  teaPackage: 'https://fstc.kispace.cc/i/0eea13eee7db9041eadb34af7f3619fe.jpg',
  teaOuterPackage: 'https://fstc.kispace.cc/i/3393d0b2d1331794f029931012f93fb2.jpg',
  powderPackage: 'https://fstc.kispace.cc/i/ec4bfaebc17502c8e910958f5117774e.jpg',
  powderJar: 'https://fstc.kispace.cc/i/f540faab1dbbfcc050c40cc8783c10d4.jpg',
  slimKit: 'https://fstc.kispace.cc/i/7ad2e18d0ce4f4e55415087151d18c83.jpg',
  slimTea: 'https://fstc.kispace.cc/i/a96e7d213f82aacfad896e4e8647bbb1.jpg',
  hairKit: 'https://fstc.kispace.cc/i/56d6836173357019c18f84a2115131b6.jpg',
  hairProduct: 'https://fstc.kispace.cc/i/8b2865d2ca4702ca41f0078fa1fb118f.jpg',
  sleepKit: 'https://fstc.kispace.cc/i/f93fa51d5f819453a715f6ad560ccb68.jpg',
  sleepProduct: 'https://fstc.kispace.cc/i/dd49fa36adfa0a200b9bb3126b55f0a3.jpg',
  tonicPaste: 'https://fstc.kispace.cc/i/55b97d2e198e1f01e97f9a88fda5c88e.jpg',
  powderBottle: 'https://fstc.kispace.cc/i/b3da5b437cb41f07b022e10185268cb4.jpg',
  powderDetail: 'https://fstc.kispace.cc/i/e07699da36cd8ca1c548f3c3d0c8399a.jpg',
  tea: {
    '元气是四宝茶': 'https://fstc.kispace.cc/i/d879b15807a834cc9a7fc5e6fc05890f.jpg',
    '胖大海润润饮': 'https://fstc.kispace.cc/i/2ac4a4c58ea1cd434a736fba8eb9832c.jpg',
    '苹果四神汤': 'https://fstc.kispace.cc/i/b8a0a60ff3f09ce9640f42dfa1688621.jpg',
    '雪梨玉竹百合茶': 'https://fstc.kispace.cc/i/4d08598aa3130be0d478abb012b6a322.jpg',
    '苹果黄芪麦冬饮': 'https://fstc.kispace.cc/i/457b63405cb0ffb42473106c9ff24a05.jpg',
    '石斛麦冬白茶饮': 'https://fstc.kispace.cc/i/2d31877769050eca7cb43018929ad9af.jpg',
    '姜枣暖暖茶': 'https://fstc.kispace.cc/i/93dbf02ba408b389b85670260532cb1d.jpg',
    '五指毛桃茯苓饮': 'https://fstc.kispace.cc/i/7ec5aa06a1338ca2dc128b23fbb13f25.jpg',
    '金银花牛蒡饮': 'https://fstc.kispace.cc/i/4f894ad9779a5fc2a067a46986cade8e.jpg',
    '山楂桑葚玫瑰饮': 'https://fstc.kispace.cc/i/03c322f5804227ec4bf2746e5e61923c.jpg',
    '百合茯苓玫瑰饮': 'https://fstc.kispace.cc/i/9773e54f76d3fafb5222e18ffc1fdaf3.jpg',
    '乌梅甘草桂花饮': 'https://fstc.kispace.cc/i/75bb4347b6b480d91734e8596a375ee1.jpg',
    '私人定制纤纤饮': 'https://fstc.kispace.cc/i/a96e7d213f82aacfad896e4e8647bbb1.jpg',
  },
  soup: {
    '山药茯苓薏仁汤': 'https://fstc.kispace.cc/i/9555e3ef1c5f33ead3499c916afaa8a8.jpg',
    '新四神汤': 'https://fstc.kispace.cc/i/24d364d9e86ea882277bfab61d7e1897.jpg',
    '玉竹百合清补汤': 'https://fstc.kispace.cc/i/ec8ce1940b1e68044bda490111f71e49.jpg',
    '五指毛桃茯苓汤': 'https://fstc.kispace.cc/i/95cf46990973d2bdcff843d2dec478ab.jpg',
    '人参虫草花菌汤': 'https://fstc.kispace.cc/i/f9a361f91123bdad77bfc406d3c527ef.jpg',
    '猴头菇无花果汤': 'https://fstc.kispace.cc/i/178f7c43f0a30cdf4965a6c744a2da0f.jpg',
    '桑葚百合黄芪汤': 'https://fstc.kispace.cc/i/dfdf2b9e02d208b2d9af8450220c7d67.jpg',
    '西洋参麦冬黄芪汤': 'https://fstc.kispace.cc/i/42eb1c3e5d5972c3e3cdd9250d74ea7f.jpg',
    '铁皮石斛麦冬汤': 'https://fstc.kispace.cc/i/2ae9ba7f2e12055758561172db4c7d13.jpg',
    '花胶虫草黄芪汤': 'https://fstc.kispace.cc/i/11e5fdae093f966a19489969151e671d.jpg',
  },
}

type Product = {
  name: string
  series: string
  type: string
  spec: string
  price: string
  benefit: string
  packageName: string
  note?: string
  image: string
  featured?: boolean
}

type PackageProduct = Product & {
  positioning: string
  content: string
  service: string
  audience: string
}

const packages: PackageProduct[] = [
  {
    name: '减脂套餐',
    series: '医学营养系列',
    type: '疗程套餐',
    spec: '1疗程',
    price: '799',
    benefit: '超重 / 腰腹脂肪偏高 / 代谢下降 / 久坐人群',
    packageName: '',
    note: '含四合一营养餐包 + 纤纤茶包 + 21天指导',
    image: imageUrls.slimKit,
    featured: true,
    positioning: '医学营养 + 中医体质调理',
    content: '四合一综合营养膳食餐包 1盒，私人定制纤纤茶包 3盒',
    service: '营养师21天全程跟踪指导',
    audience: '超重人群、腰腹脂肪偏高、代谢下降、久坐办公',
  },
  {
    name: '生发乌发套餐',
    series: '乌发生发系列',
    type: '疗程套餐',
    spec: '1疗程',
    price: '350',
    benefit: '脱发 / 发质干枯 / 熬夜 / 气血不足人群',
    packageName: '',
    note: '含洗发皂 + 黄精芝麻丸 + 九制悦发膏',
    image: imageUrls.hairKit,
    featured: true,
    positioning: '中医调理 + 生活方式指导',
    content: '中药手工洗发皂 1块，黄精芝麻丸 1罐，九制悦发膏 1瓶',
    service: '健康管理师生活方式指导',
    audience: '脱发困扰、发质干枯、熬夜人群、气血不足',
  },
  {
    name: '睡眠套餐',
    series: '膏方/养生粉',
    type: '疗程套餐',
    spec: '1疗程',
    price: '568',
    benefit: '入睡困难 / 易醒多梦 / 睡眠质量差 / 压力大',
    packageName: '',
    note: '含晚安膏 + 酸枣仁粉 + 健管师指导',
    image: imageUrls.sleepKit,
    featured: true,
    positioning: '中医调理 + 健康管理师指导',
    content: '晚安膏 2瓶，酸枣仁百合茯苓桂圆粉 2罐',
    service: '健康管理师生活方式指导',
    audience: '入睡困难、易醒多梦、睡眠质量差、压力较大',
  },
  {
    name: '医学营养干预套餐',
    series: '医学营养系列',
    type: '疗程套餐',
    spec: '1套',
    price: '2388',
    benefit: '体重管理 / 营养干预 / 代谢管理 / 专业跟踪',
    packageName: '',
    note: '含综合营养膳食餐包 4盒及配套工具',
    image: imageUrls.slimKit,
    featured: true,
    positioning: '营养师一对一专业干预',
    content: '综合营养膳食餐包 4盒，赠试纸、腰围尺、多维矿物质',
    service: '营养师一对一专业指导',
    audience: '体重管理、营养干预、代谢管理、专业跟踪',
  },
]

const coreProducts: Product[] = [
  {
    name: '四合一综合营养膳食餐包',
    series: '医学营养系列',
    type: '单品',
    spec: '盒',
    price: '597',
    benefit: '医学营养干预，全面代餐',
    packageName: '减脂套餐 / 医学营养干预套餐',
    note: '三甲医院同款',
    image: imageUrls.slimKit,
    featured: true,
  },
  {
    name: '私人定制纤纤茶包',
    series: '中医特色茶包系列',
    type: '单品',
    spec: '盒（7袋/份）',
    price: '58',
    benefit: '调节体重，促进代谢',
    packageName: '减脂套餐',
    image: imageUrls.slimTea,
    featured: true,
  },
  {
    name: '中药手工洗发皂',
    series: '乌发生发系列',
    type: '单品',
    spec: '块',
    price: '68',
    benefit: '中药养护头皮，乌发生发',
    packageName: '生发乌发套餐',
    image: imageUrls.hairProduct,
  },
  {
    name: '黄精芝麻丸',
    series: '乌发生发系列',
    type: '单品',
    spec: '罐',
    price: '128',
    benefit: '补肾益精，乌发润肤',
    packageName: '生发乌发套餐',
    image: imageUrls.hairKit,
  },
  {
    name: '九制悦发膏',
    series: '膏方系列',
    type: '单品',
    spec: '瓶',
    price: '158',
    benefit: '滋养头发，防脱生发',
    packageName: '生发乌发套餐',
    image: imageUrls.tonicPaste,
  },
  {
    name: '晚安膏',
    series: '睡眠调理系列',
    type: '单品',
    spec: '瓶',
    price: '158',
    benefit: '宁心安神，助眠改善',
    packageName: '睡眠套餐',
    image: imageUrls.sleepProduct,
  },
  {
    name: '酸枣仁百合茯苓桂圆粉',
    series: '养生粉系列',
    type: '单品',
    spec: '罐',
    price: '128',
    benefit: '安神宁心，健脾养血',
    packageName: '睡眠套餐',
    image: imageUrls.powderBottle,
  },
  {
    name: '益生菌益生元固体饮料',
    series: '医学营养系列',
    type: '单品',
    spec: '盒（15包×15g）',
    price: '198',
    benefit: '肠道健康，增强免疫',
    packageName: '单独销售',
    note: '至膳益生品牌',
    image: imageUrls.powderPackage,
  },
  {
    name: '营养棒（医学营养套装）',
    series: '医学营养系列',
    type: '单品',
    spec: '8盒套装',
    price: '2180',
    benefit: '全面营养补充，体重管理',
    packageName: '单独销售',
    note: '赠试纸、腰围尺、多维矿物质',
    image: imageUrls.powderDetail,
  },
]

const teaProducts: Product[] = [
  ['元气是四宝茶', '98', '综合调理，补气养血'],
  ['胖大海润润饮', '68', '润喉利咽，清热解毒'],
  ['苹果四神汤', '68', '健脾养胃，调理消化'],
  ['小吊梨汤', '68', '润肺止咳，生津解渴'],
  ['葛根枳椇子', '68', '解酒护肝，疏通经络'],
  ['黄精黑黑饮', '68', '补肾益精，乌发润肤'],
  ['雪梨玉竹百合茶', '68', '润肺养阴，清心安神'],
  ['苹果黄芪麦冬饮', '68', '益气生津，养阴润燥'],
  ['石斛麦冬白茶饮', '68', '滋阴清热，生津益胃'],
  ['姜枣暖暖茶', '68', '温中散寒，暖胃驱寒'],
  ['五指毛桃茯苓饮', '68', '健脾益气，祛湿化痰'],
  ['金银花牛蒡饮', '68', '清热解毒，疏散风热'],
  ['山楂桑葚玫瑰饮', '68', '消食化积，活血美颜'],
  ['百合茯苓玫瑰饮', '68', '安神宁心，健脾祛湿'],
  ['乌梅甘草桂花饮', '68', '生津止渴，健脾开胃'],
  ['私人定制纤纤饮', '68', '调节体重，促进代谢'],
].map(([name, price, benefit]) => ({
  name,
  series: '中医特色茶包系列',
  type: '茶包',
  spec: '7袋/份',
  price,
  benefit,
  packageName: name === '私人定制纤纤饮' ? '减脂套餐' : '单独销售',
  image: imageUrls.tea[name as keyof typeof imageUrls.tea] ?? imageUrls.teaPackage,
}))

const soupProducts: Product[] = [
  ['山药茯苓薏仁汤', '18', '健脾祛湿，调理脾胃'],
  ['新四神汤', '22', '健脾补肾，祛湿消肿'],
  ['玉竹百合清补汤', '22', '润肺养阴，清心安神'],
  ['五指毛桃茯苓汤', '25', '益气健脾，祛湿消肿'],
  ['人参虫草花菌汤', '25', '补气益肾，增强免疫'],
  ['猴头菇无花果汤', '28', '健胃消食，养护脾胃'],
  ['桑葚百合黄芪汤', '25', '补血养肝，益气安神'],
  ['西洋参麦冬黄芪汤', '32', '益气养阴，生津止渴'],
  ['铁皮石斛麦冬汤', '32', '滋阴清热，养胃生津'],
  ['花胶虫草黄芪汤', '38', '补气养血，滋润养颜'],
].map(([name, price, benefit]) => ({
  name,
  series: '中医药膳系列',
  type: '药膳',
  spec: '独立包装',
  price,
  benefit,
  packageName: '单独销售',
  image: imageUrls.soup[name as keyof typeof imageUrls.soup],
}))

const allProducts = [...packages, ...coreProducts, ...teaProducts, ...soupProducts]
const featuredProducts = [...packages.slice(0, 3), ...coreProducts.filter((product) => product.featured)]

const categoryStats = [
  { label: '疗程套餐', value: '4', desc: '350 ~ 2388 元/疗程' },
  { label: '核心单品', value: '9', desc: '58 ~ 2180 元' },
  { label: '中医茶包', value: '16', desc: '68 ~ 98 元/份' },
  { label: '中医药膳', value: '10', desc: '18 ~ 38 元/包' },
]

const navItems = [
  { href: '#packages', label: '套餐' },
  { href: '#products', label: '商品' },
  { href: '#quality', label: '说明' },
  { href: '#wechat', label: '购买' },
]

function formatPrice(price: string) {
  return `¥${Number(price).toLocaleString('zh-CN')}`
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-[#d9ded3] bg-white shadow-[0_12px_32px_rgba(35,47,39,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(35,47,39,0.14)]">
      <div className="aspect-[4/3] overflow-hidden bg-[#eef2e8]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex min-h-[242px] flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Tag color="green" className="mb-2">{product.type}</Tag>
            <h3 className="text-lg font-semibold leading-snug text-[#243126]">{product.name}</h3>
          </div>
          <div className="shrink-0 text-right">
            <div className="text-xl font-bold text-[#b24d2b]">{formatPrice(product.price)}</div>
            <div className="text-xs text-[#72806f]">{product.spec}</div>
          </div>
        </div>
        <p className="line-clamp-2 text-sm leading-6 text-[#5e695d]">{product.benefit}</p>
        <div className="mt-auto space-y-2 border-t border-[#edf0ea] pt-3 text-xs text-[#748071]">
          <div>{product.series}</div>
          <div>{product.packageName}</div>
          {product.note && <div>{product.note}</div>}
        </div>
      </div>
    </article>
  )
}

function SectionHeading({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#8a5c34]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-[#243126] sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-[#697568]">{desc}</p>
    </div>
  )
}

export default function LandingPage() {
  const navigate = useNavigate()
  const { isAuthenticated, user, logout } = useAuth()

  const handleLogout = async () => {
    await logout()
    navigate('/', { replace: true })
  }

  const userMenuItems = [
    {
      key: 'user',
      icon: <User size={16} />,
      label: (
        <Flex vertical gap={2} style={{ minWidth: 160 }}>
          <Typography.Text type="secondary">当前用户</Typography.Text>
          <Typography.Text strong>{user?.username ?? '未登录'}</Typography.Text>
        </Flex>
      ),
      disabled: true,
    },
    { type: 'divider' as const },
    {
      key: 'dashboard',
      icon: <ShoppingBag size={16} />,
      label: '进入工作台',
      onClick: () => navigate('/dashboard'),
    },
    {
      key: 'logout',
      icon: <LogOut size={16} />,
      label: '退出登录',
      onClick: handleLogout,
    },
  ]

  return (
    <div className="min-h-screen bg-[#f7f6ef] text-[#243126]">
      <header className="fixed top-0 z-50 w-full border-b border-white/30 bg-[#fbfaf4]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2f5c43] text-white">
              <LeafMark />
            </span>
            <span>
              <span className="block text-lg font-semibold tracking-tight">禾沐健康</span>
              <span className="hidden text-xs text-[#738071] sm:block">药食同源产品展示</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-[#556253] md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[#b24d2b]">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#wechat"
              className="hidden h-9 items-center gap-2 rounded-full bg-[#b24d2b] px-4 text-sm font-medium text-white transition hover:bg-[#923e23] sm:flex"
            >
              <MessageCircle size={16} />
              扫码购买
            </a>
            {isAuthenticated ? (
              <Dropdown menu={{ items: userMenuItems }} placement="bottomRight" arrow>
                <Avatar style={{ background: '#2f5c43', cursor: 'pointer' }} icon={<User size={18} />} />
              </Dropdown>
            ) : (
              <Button
                size="small"
                icon={<LogIn size={15} />}
                onClick={() => navigate('/login')}
              >
                登录
              </Button>
            )}
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative min-h-[86vh] overflow-hidden pt-16">
          <img
            src={imageUrls.hero}
            alt="禾沐健康药食同源产品"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#13251a]/55" />
          <div className="relative mx-auto flex min-h-[calc(86vh-4rem)] max-w-7xl flex-col justify-end px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_320px]">
              <div className="max-w-3xl pb-4 text-white">
                <Tag color="gold" className="mb-5">39 款产品 · 套餐 / 茶包 / 药膳 / 膏方</Tag>
                <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  药食同源日常调理产品，一站式展示与咨询购买
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/86 sm:text-lg">
                  覆盖体重管理、睡眠调理、乌发生发、日常茶饮和家庭药膳。价格、规格和适用场景直接来自产品统计表。
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#packages"
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-[#243126] transition hover:bg-[#eef2e8]"
                  >
                    <Package size={17} />
                    查看套餐
                  </a>
                  <a
                    href="#wechat"
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-[#b24d2b] px-5 text-sm font-semibold text-white transition hover:bg-[#923e23]"
                  >
                    <MessageCircle size={17} />
                    加微信下单
                  </a>
                </div>
              </div>
              <div id="wechat" className="rounded-lg border border-white/25 bg-white/94 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                <div className="grid grid-cols-[108px_1fr] items-center gap-4 sm:grid-cols-[132px_1fr] lg:block">
                  <img
                    src={qrCodeUrl}
                    alt="微信二维码"
                    className="aspect-square w-full rounded-md object-cover lg:mx-auto lg:w-44"
                  />
                  <div className="lg:mt-4 lg:text-center">
                    <div className="text-base font-semibold text-[#243126]">扫码添加微信购买</div>
                    <p className="mt-2 text-sm leading-6 text-[#697568]">
                      添加好友后确认商品、数量和收货信息，再通过微信转账完成购买。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#e3e1d5] bg-[#fbfaf4] px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categoryStats.map((stat) => (
              <div key={stat.label} className="flex items-center justify-between rounded-lg bg-white px-5 py-4 shadow-[0_8px_26px_rgba(35,47,39,0.06)]">
                <div>
                  <div className="text-sm text-[#697568]">{stat.label}</div>
                  <div className="mt-1 text-xs text-[#8a5c34]">{stat.desc}</div>
                </div>
                <div className="text-3xl font-semibold text-[#2f5c43]">{stat.value}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="packages" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="疗程套餐"
              title="按场景组合好的调理方案"
              desc="套餐内容、指导服务和适合人群来自产品统计表，方便用户快速找到对应需求。"
            />
            <div className="grid gap-6 lg:grid-cols-4">
              {packages.map((item) => (
                <article key={item.name} className="overflow-hidden rounded-lg bg-white shadow-[0_12px_32px_rgba(35,47,39,0.08)]">
                  <div className="aspect-[4/3] overflow-hidden bg-[#eef2e8]">
                    <img src={item.image} alt={item.name} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="space-y-4 p-5">
                    <div>
                      <div className="mb-2 text-sm font-medium text-[#8a5c34]">{item.positioning}</div>
                      <h3 className="text-xl font-semibold text-[#243126]">{item.name}</h3>
                    </div>
                    <div className="flex items-end justify-between gap-4">
                      <span className="text-3xl font-bold text-[#b24d2b]">{formatPrice(item.price)}</span>
                      <span className="text-sm text-[#697568]">{item.spec}</span>
                    </div>
                    <p className="text-sm leading-6 text-[#5e695d]">{item.content}</p>
                    <div className="space-y-2 border-t border-[#edf0ea] pt-4 text-xs leading-5 text-[#697568]">
                      <div>{item.service}</div>
                      <div>{item.audience}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#eef2e8] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="推荐单品"
              title="高频咨询产品"
              desc="把套餐主品、体重管理和茶包等商品放在前面，便于用户快速扫价。"
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProducts.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="商品目录"
              title="39 款产品完整展示"
              desc="包含套餐、核心单品、中医特色茶包和中医药膳，所有价格与规格按现有表格录入。"
            />
            <ProductShelf title="核心单品" products={coreProducts} />
            <ProductShelf title="中医特色茶包系列" products={teaProducts} />
            <ProductShelf title="中医药膳系列" products={soupProducts} />
          </div>
        </section>

        <section id="quality" className="bg-[#fbfaf4] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#8a5c34]">产品体系</p>
                <h2 className="text-3xl font-semibold tracking-tight text-[#243126] sm:text-4xl">按人群和日常场景组织商品</h2>
                <p className="mt-5 text-base leading-8 text-[#697568]">
                  当前素材未包含明确证书或资质文件，因此页面不展示证书编号。页面重点呈现真实商品图、价格、规格、适用场景和微信咨询下单路径。
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    ['产品总计', `${allProducts.length} 款`],
                    ['价格区间', '18 ~ 2388 元'],
                    ['茶包规格', '7袋/份'],
                    ['药膳规格', '独立包装'],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-lg border border-[#d9ded3] bg-white p-4">
                      <div className="text-sm text-[#697568]">{label}</div>
                      <div className="mt-2 text-xl font-semibold text-[#2f5c43]">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { icon: <ShieldCheck size={22} />, title: '信息透明', desc: '价格、规格、适用场景集中展示。' },
                  { icon: <Sparkles size={22} />, title: '场景清晰', desc: '按体重、睡眠、乌发、茶饮、药膳分类。' },
                  { icon: <Utensils size={22} />, title: '微信成交', desc: '加好友确认需求后再转账购买。' },
                ].map((item) => (
                  <div key={item.title} className="rounded-lg bg-[#2f5c43] p-5 text-white">
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/14">{item.icon}</div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/80">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e3e1d5] bg-[#243126] px-4 py-8 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/72 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-semibold text-white">禾沐健康 · 药食同源产品展示</div>
            <div className="mt-1">扫码添加微信，沟通确认后转账购买。</div>
          </div>
          <a href="#wechat" className="inline-flex items-center gap-2 text-white transition hover:text-[#f0c27a]">
            <MessageCircle size={16} />
            微信咨询购买
          </a>
        </div>
      </footer>
    </div>
  )
}

function ProductShelf({ title, products }: { title: string; products: Product[] }) {
  return (
    <div className="mb-14 last:mb-0">
      <div className="mb-5 flex items-end justify-between gap-4 border-b border-[#d9ded3] pb-3">
        <h3 className="text-2xl font-semibold text-[#243126]">{title}</h3>
        <span className="text-sm text-[#697568]">{products.length} 款</span>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  )
}

function LeafMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M19.8 4.2c-5.6.4-9.8 2.1-12.4 5.2-2.4 2.8-2.9 6.3-2.2 9.3 3 .7 6.5.2 9.3-2.2 3.1-2.6 4.8-6.8 5.3-12.3Zm-4.4 4.4c-2.8 1.5-5.1 3.7-6.8 6.5-.4.7-1.5.1-1.1-.7 1.8-3 4.4-5.5 7.4-7 .8-.4 1.3.8.5 1.2Z" />
    </svg>
  )
}
