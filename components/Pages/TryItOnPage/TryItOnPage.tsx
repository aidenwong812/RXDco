import useScrollTryItOn from "../../../hooks/useScrollTryItOn"
import { TestLabelProvider } from "../../../providers/TestLabelProvider"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import GetInspired from "./GetInspired"
import HeroSection from "./HeroSection"
import TestLabelSection from "./TestLabelSection"

const TryItOnPage = () => {
  const { inspiredRef, testRef, scrollToInspired, scrollToTestlabel } = useScrollTryItOn()

  return (
    <Layout type="base">
      <SeoHead
        title="Try It On | RXDco"
        desription="Try It On"
        image="https://rxdcoassets.b-cdn.net/_1200x630_crop_center-center_82_none/RXDepot_6-min_2021-01-19-041423.jpg?mtime=1611029663"
      />
      <div
        className="shadow-[0_2px_150px_rgba(30,30,30,.19)] 2xl:w-[1440px] w-[100%] 
        overflow-hidden relative"
      >
        <HeroSection scrollToInspired={scrollToInspired} scrollToTestlabel={scrollToTestlabel} />
        <div ref={inspiredRef}>
          <GetInspired scrollToTestlabel={scrollToTestlabel} />
        </div>
        <div ref={testRef}>
          <TestLabelProvider>
            <TestLabelSection />
          </TestLabelProvider>
        </div>
      </div>
    </Layout>
  )
}

export default TryItOnPage
