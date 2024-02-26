import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import WhyUsSection from "../WhyUsSection"
import BlogsSection from "./BlogsSection"
import HeroSection from "./HeroSection"

const BlogPage = () => (
  <Layout type="base">
    <SeoHead
      title="Blog | RXDco"
      desription="We are a family-owned custom packaging solutions provider with over 100 years in the packaging industry, servicing the cannabis industry."
      image="https://rxdcoassets.b-cdn.net/_1200x630_crop_center-center_82_none/RXD-Co-Cannalit-Cannabis-Infused-Gummies_2022-07-06-202218_wipd.jpg?mtime=1657138939"
    />
    <div
      className="shadow-[0_2px_150px_rgba(30,30,30,.19)] 2xl:w-[1440px] w-[100%] 
      overflow-hidden relative"
    >
      <HeroSection />
      <BlogsSection />
      <WhyUsSection className="!px-[16px] !pt-0 md:!pt-[198px] relative z-[1] md:!px-[48px]" />
    </div>
  </Layout>
)

export default BlogPage
