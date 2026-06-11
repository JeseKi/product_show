import { Image, Tag } from 'antd'
import { ArrowLeft, MessageCircle } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { imageUrls, qrCodeUrl, teaBagImages, teaProductImages } from './landingAssets'
import { allProducts } from './landingData'
import { BrandMark, ProductCard } from './LandingComponents'
import type { Product } from './landingTypes'
import { formatPrice } from './landingTypes'

function findProduct(name: string | undefined) {
  if (!name) return undefined
  return allProducts.find((product) => product.name === name)
}

function uniqueImages(images: string[]) {
  return images.filter((image, index) => image && images.indexOf(image) === index)
}

function galleryFor(product: Product) {
  if (product.name === '减脂套餐') {
    return uniqueImages([product.image, imageUrls.slimTea])
  }
  if (product.name === '医学营养干预套餐') {
    return uniqueImages([product.image])
  }
  if (product.name === '生发乌发套餐') {
    return uniqueImages([product.image, imageUrls.hairProduct, imageUrls.tonicPaste])
  }
  if (product.name === '睡眠套餐') {
    return uniqueImages([product.image, imageUrls.sleepProduct, imageUrls.powderBottle])
  }
  if (product.name === '私人定制纤纤茶包') {
    return uniqueImages([teaProductImages['私人定制纤纤饮'], product.image, imageUrls.teaPackage, imageUrls.teaOuterPackage])
  }
  if (product.type === '茶包' || product.series.includes('茶包')) {
    return uniqueImages([product.image, teaBagImages[product.name], imageUrls.teaPackage, imageUrls.teaOuterPackage])
  }
  return uniqueImages([product.image])
}

function relatedProducts(product: Product) {
  return allProducts
    .filter((item) => item.name !== product.name && (item.type === product.type || item.series === product.series))
    .slice(0, 3)
}

export default function ProductDetailPage() {
  const { productName } = useParams()
  const product = findProduct(productName)

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f7f6ef] px-4 py-14 text-[#243126]">
        <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 text-center shadow-[0_12px_32px_rgba(35,47,39,0.08)]">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#2f5c43]">
            <BrandMark />
          </div>
          <h1 className="text-2xl font-semibold">未找到商品</h1>
          <p className="mt-3 text-sm leading-6 text-[#697568]">商品可能已调整，回到首页查看完整目录。</p>
          <Link to="/#products" className="mt-6 inline-flex h-10 items-center rounded-full bg-[#2f5c43] px-5 text-sm font-semibold text-white">
            返回商品目录
          </Link>
        </div>
      </div>
    )
  }

  const gallery = galleryFor(product)
  const related = relatedProducts(product)

  return (
    <div className="min-h-screen bg-[#f7f6ef] text-[#243126]">
      <header className="border-b border-[#e3e1d5] bg-[#fbfaf4]">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/#top" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2f5c43]">
              <BrandMark />
            </span>
            <span>
              <span className="block text-lg font-semibold tracking-tight">禾沐健康</span>
              <span className="hidden text-xs text-[#738071] sm:block">药食同源产品展示</span>
            </span>
          </Link>
          <Link to="/#products" className="inline-flex items-center gap-2 text-sm font-medium text-[#556253] hover:text-[#b24d2b]">
            <ArrowLeft size={16} />
            返回目录
          </Link>
        </div>
      </header>

      <main>
        <section className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <Image.PreviewGroup>
              <div className="grid gap-4 sm:grid-cols-[1fr_150px]">
                <div className="overflow-hidden rounded-lg bg-[#eef2e8] shadow-[0_12px_32px_rgba(35,47,39,0.08)]">
                  <PreviewImage src={gallery[0]} alt={product.name} className="aspect-[4/3]" />
                </div>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-1">
                  {gallery.map((image, index) => (
                    <div key={image} className="overflow-hidden rounded-lg border border-[#d9ded3] bg-white">
                      <PreviewImage src={image} alt={`${product.name} 图 ${index + 1}`} className="aspect-square" />
                    </div>
                  ))}
                </div>
              </div>
            </Image.PreviewGroup>

            <div className="rounded-lg bg-white p-6 shadow-[0_12px_32px_rgba(35,47,39,0.08)]">
              <Tag color="green" className="mb-4">{product.type}</Tag>
              <h1 className="text-3xl font-semibold tracking-tight text-[#243126]">{product.name}</h1>
              <p className="mt-4 text-base leading-8 text-[#697568]">{product.benefit}</p>
              <div className="mt-6 flex items-end justify-between gap-4 border-y border-[#edf0ea] py-5">
                <div>
                  <div className="text-sm text-[#697568]">售价</div>
                  <div className="mt-1 text-4xl font-bold text-[#b24d2b]">{formatPrice(product.price)}</div>
                </div>
                <div className="text-right text-sm text-[#697568]">{product.spec}</div>
              </div>
              <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
                <Detail label="系列" value={product.series} />
                <Detail label="规格" value={product.spec} />
                <Detail label="归属套餐" value={product.packageName || '单独咨询'} />
                <Detail label="备注" value={product.note || '添加微信确认库存与用法'} />
              </dl>
              <div className="mt-6 grid gap-4 rounded-lg bg-[#f7f6ef] p-4 sm:grid-cols-[112px_1fr]">
                <Image
                  src={qrCodeUrl}
                  alt="微信二维码"
                  className="aspect-square rounded-md object-cover"
                  preview={{ mask: '预览二维码' }}
                  width="100%"
                />
                <div>
                  <div className="font-semibold text-[#243126]">添加微信咨询购买</div>
                  <p className="mt-2 text-sm leading-6 text-[#697568]">
                    发送商品名称、数量和收货信息，确认后通过微信转账完成购买。
                  </p>
                  <a href="/#wechat" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#b24d2b]">
                    <MessageCircle size={16} />
                    查看微信二维码
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="px-4 pb-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-5 flex items-end justify-between border-b border-[#d9ded3] pb-3">
                <h2 className="text-2xl font-semibold">同类商品</h2>
                <Link to="/#products" className="text-sm text-[#8a5c34] hover:text-[#b24d2b]">完整目录</Link>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {related.map((item) => (
                  <ProductCard key={item.name} product={item} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

function PreviewImage({ src, alt, className }: { src: string; alt: string; className: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      className={`w-full object-cover ${className}`}
      preview={{ mask: '点击预览' }}
      width="100%"
    />
  )
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[#8a5c34]">{label}</dt>
      <dd className="mt-1 leading-6 text-[#3f4a3f]">{value}</dd>
    </div>
  )
}
