import { type MouseEvent, useEffect, useState } from 'react'
import { Image, Tag } from 'antd'
import { ArrowUpRight, ChevronLeft, ChevronRight, ListTree } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { CategoryLink, PackageProduct, Product } from './landingTypes'
import { formatPrice, productPath } from './landingTypes'

export function SectionHeading({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#8a5c34]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-[#243126] sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-[#697568]">{desc}</p>
    </div>
  )
}

export function CategoryNav({ categories }: { categories: CategoryLink[] }) {
  return (
    <section className="border-y border-[#e3e1d5] bg-[#fbfaf4] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className="group flex items-center justify-between rounded-lg bg-white px-5 py-4 shadow-[0_8px_26px_rgba(35,47,39,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(35,47,39,0.1)]"
          >
            <div>
              <div className="text-sm text-[#697568]">{category.label}</div>
              <div className="mt-1 text-xs text-[#8a5c34]">{category.desc}</div>
            </div>
            <div className="flex items-center gap-2 text-3xl font-semibold text-[#2f5c43]">
              {category.value}
              <ArrowUpRight size={16} className="text-[#9a6a3f] opacity-0 transition group-hover:opacity-100" />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export function ProductCategorySidebar({ categories }: { categories: CategoryLink[] }) {
  const [collapsed, setCollapsed] = useState(false)
  const [activeId, setActiveId] = useState(categories[0]?.id ?? '')

  useEffect(() => {
    const initialId = window.location.hash.replace('#', '')

    if (initialId && categories.some((category) => category.id === initialId)) {
      setActiveId(initialId)
    }
  }, [categories])

  useEffect(() => {
    const sections = categories
      .map((category) => document.getElementById(category.id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (sections.length === 0) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]

        if (visibleEntry?.target.id) {
          setActiveId(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-112px 0px -58% 0px',
        threshold: [0.12, 0.28],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [categories])

  const handleCategoryClick = (event: MouseEvent<HTMLAnchorElement>, categoryId: string) => {
    const target = document.getElementById(categoryId)

    if (!target) {
      return
    }

    event.preventDefault()
    setActiveId(categoryId)
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', `#${categoryId}`)
  }

  return (
    <aside
      aria-label="商品分类导航"
      className={`fixed left-2 top-20 z-40 max-h-[calc(100vh-6rem)] overflow-hidden rounded-lg border border-[#d9ded3] bg-white/95 text-[#243126] shadow-[0_18px_48px_rgba(35,47,39,0.18)] backdrop-blur transition-all duration-300 sm:left-4 ${
        collapsed ? 'w-12' : 'w-44 sm:w-56'
      }`}
    >
      <div className={`flex items-center border-b border-[#edf0ea] ${collapsed ? 'justify-center p-2' : 'justify-between gap-2 p-3'}`}>
        {!collapsed && (
          <div className="flex min-w-0 items-center gap-2">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#2f5c43] text-white">
              <ListTree size={17} />
            </span>
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold">商品分类</div>
              <div className="truncate text-xs text-[#697568]">点击直达</div>
            </div>
          </div>
        )}
        <button
          type="button"
          aria-label={collapsed ? '展开商品分类侧栏' : '折叠商品分类侧栏'}
          aria-expanded={!collapsed}
          onClick={() => setCollapsed((current) => !current)}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#d9ded3] bg-[#fbfaf4] text-[#556253] transition hover:border-[#b24d2b] hover:text-[#b24d2b]"
        >
          {collapsed ? <ChevronRight size={17} /> : <ChevronLeft size={17} />}
        </button>
      </div>

      <nav className={`space-y-1 overflow-y-auto ${collapsed ? 'px-1.5 py-2' : 'p-2'}`}>
        {categories.map((category) => {
          const active = activeId === category.id

          return (
            <a
              key={category.id}
              href={`#${category.id}`}
              aria-current={active ? 'true' : undefined}
              title={collapsed ? category.label : undefined}
              onClick={(event) => handleCategoryClick(event, category.id)}
              className={`group flex min-h-11 items-center rounded-md border transition ${
                collapsed
                  ? 'justify-center px-1 py-2'
                  : 'justify-between gap-3 px-3 py-2.5'
              } ${
                active
                  ? 'border-[#2f5c43] bg-[#eef2e8] text-[#2f5c43]'
                  : 'border-transparent text-[#556253] hover:border-[#e3e1d5] hover:bg-[#fbfaf4] hover:text-[#b24d2b]'
              }`}
            >
              <span className={`min-w-0 ${collapsed ? 'text-center text-xs font-semibold leading-4' : ''}`}>
                {collapsed ? category.label.slice(0, 2) : (
                  <>
                    <span className="block truncate text-sm font-semibold">{category.label}</span>
                    <span className="mt-0.5 block truncate text-xs text-[#8a5c34]">{category.desc}</span>
                  </>
                )}
              </span>
              {!collapsed && (
                <span
                  className={`flex h-7 min-w-7 shrink-0 items-center justify-center rounded-full px-2 text-xs font-semibold ${
                    active ? 'bg-[#2f5c43] text-white' : 'bg-[#eef2e8] text-[#2f5c43] group-hover:bg-[#f6e7d7]'
                  }`}
                >
                  {category.value}
                </span>
              )}
            </a>
          )
        })}
      </nav>
    </aside>
  )
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-[#d9ded3] bg-white shadow-[0_12px_32px_rgba(35,47,39,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(35,47,39,0.14)]">
      <div className="aspect-[4/3] overflow-hidden bg-[#eef2e8]">
        <Image
          src={product.image}
          alt={product.name}
          className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
          preview={{ mask: '点击预览' }}
          width="100%"
        />
      </div>
      <Link to={productPath(product)} className="flex min-h-[250px] flex-col gap-3 p-5">
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
          <div className="pt-1 font-medium text-[#b24d2b]">查看详情</div>
        </div>
      </Link>
    </article>
  )
}

export function PackageCard({ item }: { item: PackageProduct }) {
  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-[0_12px_32px_rgba(35,47,39,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(35,47,39,0.14)]">
      <div className="aspect-[4/3] overflow-hidden bg-[#eef2e8]">
        <Image
          src={item.image}
          alt={item.name}
          className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
          preview={{ mask: '点击预览' }}
          width="100%"
        />
      </div>
      <Link to={productPath(item)} className="block space-y-4 p-5">
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
          <div className="font-medium text-[#b24d2b]">查看详情</div>
        </div>
      </Link>
    </article>
  )
}

export function ProductShelf({ id, title, products }: { id: string; title: string; products: Product[] }) {
  return (
    <div id={id} className="mb-14 scroll-mt-24 last:mb-0">
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

export function BrandMark() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="h-8 w-8">
      <path d="M17 39c2.7 6.2 8.3 9.8 15 9.8s12.3-3.6 15-9.8H17Z" fill="#f8f1d8" />
      <path d="M20 35.2h24" fill="none" stroke="#f8f1d8" strokeLinecap="round" strokeWidth="4" />
      <path d="M32 34.2c-1.5-8 2.9-15 13.2-18.8 1.2 10.7-4 17.5-13.2 18.8Z" fill="#9fcf92" />
      <path d="M31.5 34.2c-7.7-1.2-12.2-6.7-12.1-15.8 8.7 2.2 13 8.1 12.1 15.8Z" fill="#d9b56d" />
      <path d="M32 18v25" fill="none" stroke="#f8f1d8" strokeLinecap="round" strokeWidth="3.6" />
      <path d="M25 27.5h14" fill="none" stroke="#f8f1d8" strokeLinecap="round" strokeWidth="3.2" />
      <circle cx="32" cy="32" r="27" fill="none" opacity=".42" stroke="#f8f1d8" strokeWidth="2" />
    </svg>
  )
}
