import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import useMedia from "../../../hooks/useMedia"
import Products from "./Products"

const InspirationPage = () => {
  const isMobile = useMedia()

  return (
    <Layout type="base">
      <SeoHead
        title="Inspiration | RXDco"
        desription="Get inspired by the limitless possibilities of our custom engineered packaging. Raise your brand’s profile. Get serious shelf appeal. Blaze your own trail. "
        image="https://rxdcoassets.b-cdn.net/_1200x630_crop_center-center_82_none/Logo.jpg?mtime=1656439237"
      />
      <div
        className="shadow-[0_2px_150px_rgba(30,30,30,.19)] 2xl:w-[1440px] w-[100%] 
            overflow-hidden relative pt-[120px] md:pt-[8.5rem] px-[16px] md:px-[3rem] 
            pb-[80px] md:pb-[12.5rem]
            flex flex-col items-center bg-secondarygray"
      >
        <div className="relative">
          <div
            className="absolute left-[50.1%] top-[67px] md:top-[51.1%] filter grayscale
                  w-[241px] md:w-[18rem] aspect-[1/1] border border-iconlightblue
                  rounded-full translate-x-[-50%] translate-y-[-50%] z-[1] opacity-[0.7]"
          />
          <div className="md:pt-[5.5rem] pb-[80px] relative z-[2]">
            <p
              className="pb-[24px] md:pb-[26.8px] text-[32px] md:text-[2.5rem] font-[400] 
                      leading-[1.2] md:leading-[3rem] tracking-[-0.8px]
                      font-radikal_light text-center"
            >
              See what we can do
            </p>
            <p className="text-brown font-radikal_light text-[16px] md:text-[1.25rem] leading-[1.5] text-center">
              {isMobile ? (
                <>
                  Get inspired by the limitless possibilities of our custom engineered packaging.
                  Raise your brand’s profile. Get serious shelf appeal. Blaze your own trail.
                </>
              ) : (
                <>
                  Get inspired by the limitless possibilities of our custom engineered packaging.
                  <br />
                  Raise your brand’s profile. Get serious shelf appeal. Blaze your own trail.
                </>
              )}
            </p>
          </div>
        </div>
        <div className="w-full">
          <Products />
        </div>
      </div>
    </Layout>
  )
}

export default InspirationPage
