import useMedia from "../../../hooks/useMedia"
import Media from "../../../shared/Media"
import CTAButton from "./CTAButton"

const BrandingDesign = () => {
  const isMobile = useMedia()

  return (
    <div
      className="w-full flex flex-col lg:flex-row lg:relative bg-gray 
      px-[16px] md:px-[20px] xl:px-[70px] relative pt-[70px] md:pt-0"
    >
      <div className="absolute left-0 top-0 z-[1] w-full h-[85%] bg-secondarygray" />
      <Media
        type="image"
        link="/images/services_line.svg"
        blurLink="/images/services_line.png"
        containerClasses="w-[780px] md:w-full aspect-[1440/501] !absolute top-[-100px] md:top-[-250px] 
        left-auto right-0 md:left-0 md:right-auto z-[2]"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-[20px] lg:gap-[30px] relative z-[3]">
        <div className="justify-start md:justify-center items-start flex 3md:hidden">
          <div className="w-fit">
            <p
              className="text-[28px] md:text-[40px] text-brown font-radikal_light 
            leading-[100%] tracking-[-1px]"
            >
              Branding design
            </p>
            <p className="text-[16px] text-black pt-[32px] pb-[24px] font-radikal_light">
              {isMobile ? (
                <>
                  No branding? No problem. Our design team can devise a logo and print design that
                  suits your business and fits your chosen products.
                </>
              ) : (
                <>
                  No branding? No problem. Our design team can
                  <br />
                  devise a logo and print design that suits your
                  <br /> business and fits your chosen products.
                </>
              )}
            </p>
            <CTAButton href="/services/branding">{`Let's do it!`}</CTAButton>
          </div>
        </div>
        <div className="flex justify-end pt-[40px] md:pt-0">
          <div className="relative max-w-[520px] w-full md:w-[calc(100%-20px)] 3lg:w-[530px]">
            <Media
              type="image"
              link="/images/branding.webp"
              blurLink="/images/branding.webp"
              containerClasses="z-[2] w-[calc(100%-30px)] 3lg:w-[530px] aspect-[1/1] rounded-[12px] overflow-hidden"
            />
            <div className="absolute z-[1] bg-primarygray w-[calc(100%-30px)] 3lg:w-full h-full left-[20px] top-[-15px] rounded-[12px]" />
          </div>
        </div>
        <div className="justify-center items-center hidden 3md:flex translate-y-[-40px]">
          <div className="w-fit">
            <p className="text-[28px] md:text-[40px] text-brown font-radikal_light">
              Branding design
            </p>
            <p className="text-[16px] text-black py-[32px] font-radikal_light">
              No branding? No problem. Our design team can
              <br />
              devise a logo and print design that suits your business
              <br />
              and fits your chosen products.
            </p>
            <CTAButton href="/services/branding">{`Let's do it!`}</CTAButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandingDesign
