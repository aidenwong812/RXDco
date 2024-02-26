import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import CleanSection from "./CleanSection"
import GetInspired from "./GetInspired"
import HIWSection from "./HIWSection"
import HeroSection from "./HeroSection"
import ReadyToRevolutionize from "./ReadyToRevolutionize"

const DevelopmentPage = () => (
  <Layout type="base">
    <SeoHead
      title="Development | RXDco"
      desription="Work with our in-house R&D team to develop custom engineered compliance"
      image="https://rxdcoassets.b-cdn.net/_1200x630_crop_center-center_82_none/Render-11.png?mtime=1651685497"
    />
    <div
      className="shadow-[0_2px_150px_rgba(30,30,30,.19)] 2xl:w-[1440px] w-[100%] overflow-hidden
    relative"
    >
      <HeroSection />
      <CleanSection />
      <HIWSection />
      <GetInspired />
      <ReadyToRevolutionize />
    </div>
  </Layout>
)

export default DevelopmentPage
