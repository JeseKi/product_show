export type Product = {
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

export type PackageProduct = Product & {
  positioning: string
  content: string
  service: string
  audience: string
}

export type CategoryLink = {
  id: string
  label: string
  value: string
  desc: string
}

export function formatPrice(price: string) {
  return `¥${Number(price).toLocaleString('zh-CN')}`
}

export function productPath(product: Product) {
  return `/products/${encodeURIComponent(product.name)}`
}
