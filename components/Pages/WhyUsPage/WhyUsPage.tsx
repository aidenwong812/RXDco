import useMedia from "../../../hooks/useMedia"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import DesktopReasons from "./Desktop/Reasons"
import DesktopDecoration from "./DesktopDecoration"
import MobileReasons from "./Mobile/Reasons"
import MobileDecoration from "./MobileDecoration"

const WhyUsPage = () => {
  const isMobile = useMedia()

  return (
    <Layout type="base">
      <SeoHead
        title="Why Us | RXDco"
        desription="Why Us"
        image="https://rxdcoassets.b-cdn.net/_1200x630_crop_center-center_82_none/Logo.jpg?mtime=1656439237"
      />
      <div
        className="shadow-[0_2px_150px_rgba(30,30,30,.19)] 2xl:w-[1440px] w-[100%] 
          overflow-hidden relative min-h-[calc(100vh-136px)] px-[16px] md:px-[3rem]
          grid grid-cols-1 md:grid-cols-3 pt-[104px] md:pt-[208px] pb-[143px] bg-secondarygray"
      >
        {isMobile ? <MobileDecoration /> : <DesktopDecoration />}
        <div className="col-span-1 relative z-[2] mb-[40px] md:mb-0">
          <p className="tracking-[-1px] leading-[1] font-radikal_light text-[32px] md:text-[48px]">
            Why RXD Co?
          </p>
          <p
            className="tracking-[-0.4px] leading-[1.4] mt-[24px] md:mt-[32px] text-darkgray 
                text-[16px] md:text-[20px]
                font-radikal_light max-w-[291px] w-full"
          >
            RXDco is always on the breaking-edge of innovative new packaging solutions and only
            produces top-of-the-line quality packaging products.
          </p>
        </div>
        {isMobile ? <MobileReasons /> : <DesktopReasons />}
      </div>
    </Layout>
  )
}
export default WhyUsPage
