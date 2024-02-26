import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import GetInspired from "./GetInspired"
import HIWSection from "./HIWSection"
import HeroSection from "./HeroSection"
import LookingSection from "./LookingSection"

const SourcingPage = () => (
  <Layout type="base">
    <SeoHead
      title="Sourcing | RXDco"
      desription="We are a family-owned custom packaging solutions provider with over 100 years in the"
      image="https://rxdcoassets.b-cdn.net/_1200x630_crop_center-center_82_none/RXD-Co-Cannalit-Cannabis-Infused-Gummies_2022-07-06-202218_wipd.jpg?mtime=1657138939"
    />
    <div
      className="shadow-[0_2px_150px_rgba(30,30,30,.19)] 2xl:w-[1440px] w-[100%] 
      overflow-hidden relative"
    >
      <HeroSection />
      <HIWSection />
      <GetInspired />
      <LookingSection />
    </div>
  </Layout>
)

export default SourcingPage
