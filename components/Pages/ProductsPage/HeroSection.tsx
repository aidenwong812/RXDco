import Link from "next/link"
import Media from "../../../shared/Media"
import HeroSlides from "./HeroSlides"

const HeroSection = () => (
  <div
    className="w-full pt-[80px] md:pt-[120px] grid grid-cols-12 
        3md:gap-x-[40px] md:px-[20px] xl:px-[70px] relative bg-lightgray"
  >
    <div className="absolute w-full h-[70%] bg-[#ededed] left-0 top-0" />
    <div className="hidden 3md:block absolute w-full h-[80%] left-0 top-0 bg-gray z-[1]" />
    <div className="col-span-12 2lg:col-span-9 relative px-[20px] 2lg:px-0 z-[2]">
      <HeroSlides />
      <div
        className="absolute px-[20px] py-[5px] text-[16px] text-white
        tracking-[2px] font-radikal_light
        bg-blue rounded-[0.2rem] left-[24px] top-[365px] 3md:left-[56px] 3md:top-[56px] z-[12]"
      >
        FEATURED
      </div>
    </div>
    <div
      className="col-span-12 2lg:col-span-3  relative z-[3]
            flex flex-col sm:flex-row 2lg:flex-col gap-x-[30px] 2lg:flex-col gap-y-[32px]
            border-t border-t-mediumgray pt-[30px] px-[20px] 2lg:pt-0 2lg:border-none 2lg:px-0"
    >
      <Link href="/inspiration">
        <div
          className="pb-[28px] md:pb-0 pt-[40px] px-[30px] flex flex-col items-center transition duration-[300ms]
                    bg-white rounded-[0.8rem] cursor-pointer hover:shadow-[0_0.5em_1em_rgba(0,0,0,.2)]
                    2lg:max-w-[285px] w-full"
        >
          <p className="font-radikal_medium text-[24px] text-black">Get inspired</p>
          <p className="font-radikal_light text-[16px] text-darkgray pt-[15px] pb-[28px] md:py-[32px] text-center">
            See our unlimited cannabis packaging possibilites
          </p>
          <Media
            type="image"
            link="/images/custom2.webp"
            blurLink="/images/custom2.webp"
            containerClasses="w-[230px] aspect-[23/10]"
          />
        </div>
      </Link>
      <Link href="/try-it-on">
        <div
          className="pb-[28px] md:pb-0 pt-[40px] px-[20px] md:px-[30px] flex flex-col items-center transition duration-[300ms]
                    bg-white rounded-[0.8rem] cursor-pointer hover:shadow-[0_0.5em_1em_rgba(0,0,0,.2)]
                    2lg:max-w-[285px] w-full"
        >
          <p className="font-radikal_medium text-[24px] text-black">Try it on</p>
          <p className="font-radikal_light text-[16px] text-darkgray pt-[10px] pb-[28px] md:py-[24px] text-center">
            See how your branded logo and designes look on our customizable cannabis packaging.
          </p>
          <Media
            type="image"
            link="/images/Atidd.webp"
            blurLink="/images/Atidd.webp"
            containerClasses="w-[225px] aspect-[225/100]"
          />
        </div>
      </Link>
    </div>
  </div>
)

export default HeroSection
