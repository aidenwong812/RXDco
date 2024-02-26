import { useBlog } from "../../../providers/BlogProvider"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import DetailSection from "./DetailSection"
import HeroSection from "./HeroSection"
import TrendingSection from "./TrendingSection"

const BlogDetailPage = () => {
  const { details } = useBlog()

  return (
    <Layout type="base">
      <SeoHead
        title={details?.seo_title}
        desription={details?.seo_description}
        image={details?.seo_image}
      />
      <div
        className="shadow-[0_2px_150px_rgba(30,30,30,.19)] 2xl:w-[1440px] w-[100%] 
                overflow-hidden relative"
      >
        <HeroSection />
        <DetailSection />
        <TrendingSection />
      </div>
    </Layout>
  )
}

export default BlogDetailPage
