import useIsMobile from "../../../hooks/useMedia"
import { MultipleSlidesProvider } from "../../../providers/MultipleSliderProvider"
import Media from "../../../shared/Media"
import CTAButton from "./CTAButton"
import HeroSlides from "./HeroSlides"
import HeroSlidesMobile from "./HeroSlidesMobile"

const HeroSection = () => {
  const isMobile = useIsMobile()

  return (
    <div
      className="w-full flex flex-col md:flex-row relative bg-secondarygray 
          md:pt-[200px] md:pb-[230px] pt-[110px] pb-[20px]
          px-0 md:px-[20px] xl:px-[70px] relative"
    >
      <Media
        type="image"
        link="/images/leaf.svg"
        blurLink="/images/leaf.png"
        containerClasses="!absolute w-[188px] aspect-[188/239] left-[74%] scale-x-[-1] md:scale-x-[1] 
        md:left-[19%] top-[100px] md:top-[10.5%] z-[1] pointer-events-none"
      />
      <Media
        type="image"
        link="/images/curve.svg"
        blurLink="/images/curve.png"
        containerClasses="!absolute 2xl:w-[100%] aspect-[1440/573] left-0 bottom-0 pointer-events-none"
      />
      <div className="relative z-[2] flex flex-col">
        <div
          className="flex md:text-left text-center flex-col 
        text-[42px] md:text-[50px] lg:text-[5rem] leading-[120%] font-radikal_light z-[1]"
        >
          Forward
          {isMobile ? " " : <br />}
          thinking
          <br />
          cannabis
          <br />
          packaging
        </div>
        {isMobile && (
          <div className="w-[290px] flex justify-center items-center relative px-[20px] self-center pt-[40px]">
            <HeroSlidesMobile />
          </div>
        )}
        <p
          className="md:text-left text-center text-[16px] lg:text-[18px] font-radikal_light 
        self-center md:self-start max-w-[340px] pt-[32px]"
        >
          Custom packaging engineered with safety, performance, and sustainability for the cannabis
          industry.
        </p>
        <div className="flex flex-row justify-center px-[20px] md:px-0 lg:justify-start md:flex-col lg:flex-row gap-[16px] pt-[35px]">
          <CTAButton
            className="!border-blue !px-0 md:!px-[30px] !bg-blue !text-white
          hover:!bg-white hover:!text-blue font-radikal_medium text-[14px] w-[50%] md:w-auto"
            href="/request-a-sample"
          >
            Get a sample
          </CTAButton>
          <CTAButton
            className="!border-blue !px-0 md:!px-[30px] hover:!bg-blue hover:!text-white
            !text-blue !bg-white font-radikal_medium text-[14px] w-[50%] md:w-auto"
            href="/request-a-quote"
          >
            Request a quote
          </CTAButton>
        </div>
      </div>
      {!isMobile && (
        <div className="w-full flex justify-center items-center relative flex-grow">
          <MultipleSlidesProvider>
            <HeroSlides />
          </MultipleSlidesProvider>
        </div>
      )}
    </div>
  )
}

export default HeroSection
