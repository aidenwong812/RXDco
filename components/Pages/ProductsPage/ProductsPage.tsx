import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import HeroSection from "./HeroSection"
import LookingSection from "./LookingSection"
import ProductList from "./ProductList"

const ProductsPage = () => (
  <Layout type="base">
    <SeoHead
      title="Custom Cannabis Packaging Products | RXDco"
      desription="The ultimate cannabis packaging to preserve concentrates."
      image="/images/product_seo.webp"
    />
    <div className="w-screen flex flex-col items-center">
      <div className="shadow-[0_2px_150px_rgba(30,30,30,.19)] 2xl:w-[1440px] w-[100%] products-slider">
        <HeroSection />
        <ProductList />
        <LookingSection />
      </div>
    </div>
  </Layout>
)

export default ProductsPage
