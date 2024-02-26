import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import NeedMoreSection from "./NeedMoreSection"
import QuestionSection from "./QuestionSection"

const FAQPage = () => (
  <Layout type="base">
    <SeoHead
      title="FAQ | RXDco"
      desription="We are a family-owned custom packaging solutions provider with over 100 years in the packaging industry, servicing the cannabis industry."
      image="https://rxdcoassets.b-cdn.net/_1200x630_crop_center-center_82_none/RXD-Co-Cannalit-Cannabis-Infused-Gummies_2022-07-06-202218_wipd.jpg?mtime=1657138939"
    />
    <div
      className="shadow-[0_2px_150px_rgba(30,30,30,.19)] 2xl:w-[1440px] w-[100%] 
          overflow-hidden relative pt-[136px] 
          bg-secondarygray"
    >
      <QuestionSection />
      <NeedMoreSection />
    </div>
  </Layout>
)

export default FAQPage
