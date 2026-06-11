import {
  CategoryNavSection,
  FeaturedSection,
  HeroSection,
  PackageSection,
  ProductsSection,
  QualitySection,
  SiteFooter,
  SiteHeader,
} from './LandingSections'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f7f6ef] text-[#243126]">
      <SiteHeader />
      <main id="top">
        <HeroSection />
        <CategoryNavSection />
        <PackageSection />
        <FeaturedSection />
        <ProductsSection />
        <QualitySection />
      </main>
      <SiteFooter />
    </div>
  )
}
