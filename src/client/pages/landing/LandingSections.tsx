import { Tag } from 'antd'
import { MessageCircle, Package, ShieldCheck, Sparkles, Utensils } from 'lucide-react'
import { imageUrls } from './landingAssets'
import { categoryLinks, coreProducts, featuredProducts, navItems, packages, soupProducts, teaProducts, allProducts } from './landingData'
import { BrandMark, CategoryNav, PackageCard, ProductCard, ProductShelf, SectionHeading } from './LandingComponents'

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/30 bg-[#fbfaf4]/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/#top" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2f5c43] shadow-[0_8px_18px_rgba(47,92,67,0.22)]">
            <BrandMark />
          </span>
          <span>
            <span className="block text-lg font-semibold tracking-tight">禾沐健康</span>
            <span className="hidden text-xs text-[#738071] sm:block">药食同源产品展示</span>
          </span>
        </a>
        <nav className="hidden items-center gap-5 text-sm text-[#556253] lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={`/${item.href}`} className="transition hover:text-[#b24d2b]">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-[86vh] overflow-hidden pt-16">
      <img src={imageUrls.hero} alt="禾沐健康药食同源产品" className="absolute inset-0 h-full w-full object-cover" />
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CategoryNavSection() {
  return <CategoryNav categories={categoryLinks} />
}

export function PackageSection() {
  return (
    <section id="packages" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="疗程套餐"
          title="按场景组合好的调理方案"
          desc="套餐内容、指导服务和适合人群来自产品统计表，方便用户快速找到对应需求。"
        />
        <div className="grid gap-6 lg:grid-cols-4">
          {packages.map((item) => (
            <PackageCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function FeaturedSection() {
  return (
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
  )
}

export function ProductsSection() {
  return (
    <section id="products" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="商品目录"
          title="39 款产品完整展示"
          desc="包含套餐、核心单品、食养特色茶包和食养药膳，所有价格与规格按现有表格录入。"
        />
        <ProductShelf id="core-products" title="核心单品" products={coreProducts} />
        <ProductShelf id="tea-products" title="食养特色茶包系列" products={teaProducts} />
        <ProductShelf id="soup-products" title="食养药膳系列" products={soupProducts} />
      </div>
    </section>
  )
}

export function QualitySection() {
  const metrics = [
    ['产品总计', `${allProducts.length} 款`],
    ['价格区间', '18 ~ 2388 元'],
    ['茶包规格', '7袋/份，25~40克/份'],
    ['药膳规格', '独立包装，50~120克/包'],
  ]
  const cards = [
    { icon: <ShieldCheck size={22} />, title: '信息透明', desc: '价格、规格、适用场景集中展示。' },
    { icon: <Sparkles size={22} />, title: '场景清晰', desc: '按体重、睡眠、乌发、茶饮、药膳分类。' },
    { icon: <Utensils size={22} />, title: '微信成交', desc: '加好友确认需求后再转账购买。' },
  ]

  return (
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
              {metrics.map(([label, value]) => (
                <div key={label} className="rounded-lg border border-[#d9ded3] bg-white p-4">
                  <div className="text-sm text-[#697568]">{label}</div>
                  <div className="mt-2 text-xl font-semibold text-[#2f5c43]">{value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {cards.map((item) => (
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
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[#e3e1d5] bg-[#243126] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/72 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-semibold text-white">禾沐健康 · 药食同源产品展示</div>
          <div className="mt-1">扫码添加微信，沟通确认后转账购买。</div>
        </div>
        <a href="/#wechat" className="inline-flex items-center gap-2 text-white transition hover:text-[#f0c27a]">
          <MessageCircle size={16} />
          微信咨询购买
        </a>
      </div>
    </footer>
  )
}
