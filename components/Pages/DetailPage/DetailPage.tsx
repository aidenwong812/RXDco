import { useDetail } from "../../../providers/DetailProvider"
import Layout from "../../Layout"
import UpCannabis from "../../UpCannabis"
import CTASection from "./CTASection"
import SeoHead from "../../SeoHead"
import FirstSection from "./FirstSection"
import HeroSection from "./HeroSection"
import SecondSection from "./SecondSection"
import ThirdSection from "./ThirdSection"
import LookingSection from "./LookingSection"

const DetailPage = () => {
  const { details } = useDetail()

  return (
    <Layout type="base">
      <SeoHead
        title={details?.seo_title}
        desription={details?.seo_description}
        image={details?.seo_image}
      />
      <div className="w-full flex flex-col items-center">
        <div className="shadow-[0_2px_150px_rgba(30,30,30,.19)] w-full 2xl:w-[1440px] overflow-hidden">
          <HeroSection />
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <CTASection />
          <UpCannabis className="!bg-lightgray md:!pb-[33px]" />
          <LookingSection />
        </div>
      </div>
    </Layout>
  )
}

export default DetailPage
