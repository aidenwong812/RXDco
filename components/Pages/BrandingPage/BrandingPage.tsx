import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import GetInspired from "./GetInspired"
import HIWSection from "./HIWSection"
import HeroSection from "./HeroSection"
import Ourwork from "./Ourwork"
import ReadyToClaim from "./ReadyToClaim"

const BrandingPage = () => (
  <Layout type="base">
    <SeoHead
      title="Branding | RXDco"
      desription="Put your own stamp on our packaging with our branding and custom design services."
      image="/images/landing_seo.jpg"
    />
    <div className="shadow-[0_2px_150px_rgba(30,30,30,.19)] 2xl:w-[1440px] w-[100%] overflow-hidden">
      <HeroSection />
      <Ourwork />
      <HIWSection />
      <GetInspired />
      <ReadyToClaim />
    </div>
  </Layout>
)

export default BrandingPage
