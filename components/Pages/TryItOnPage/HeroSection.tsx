import useMedia from "../../../hooks/useMedia"
import Media from "../../../shared/Media"
import TestLabelButton from "./TestLabelButton"

const HeroSection = ({ scrollToInspired, scrollToTestlabel }) => {
  const isMobile = useMedia()

  return (
    <div
      className="w-full relative bg-secondarygray pb-[0.5rem]
      flex flex-col md:flex-row md:justify-between pt-[132px] md:pt-[156px]"
    >
      <div
        className="absolute 
        top-[28.6%] md:top-[31.8%] left-[88%] md:left-[39.75%] 
        w-[18px] md:w-[40px] aspect-[1/1] rounded-full bg-iconlightblue"
      />
      <Media
        type="image"
        link="/images/branding_hero_curve.svg"
        blurLink="/images/branding_hero_curve.svg"
        containerClasses="!absolute left-0 md:left-[-12px] top-[12.5rem] md:top-[13rem] scale-y-[-1]
            w-full md:w-[1344px] aspect-[1344/323] z-[1]"
      />
      <div className="w-full md:w-[40%] relative z-[2] px-[32px] md:pl-[89px] md:pr-0">
        <div className="md:pt-[113px] max-w-[494px] w-full mb-4">
          <h1
            className="text-black text-[40px] md:text-[4rem] 
                leading-[1.25] md:leading-[4.5rem]
                font-radikal_light font-[400] pb-[32px] 
                text-center md:text-left"
          >
            {isMobile ? (
              <>Try our products on for size</>
            ) : (
              <>
                Try our products <br /> on for size
              </>
            )}
          </h1>
          <p
            className="text-[20px] text-brown font-radikal_light
                leading-[1.75rem] font-[300] pb-[32px]
                text-center md:text-left"
          >
            {isMobile ? (
              <>
                See how our game changing
                <br />
                packaging solutions can make your
                <br />
                brand stand out from the crowd.
              </>
            ) : (
              <>
                See how our game changing packaging solutions can
                <br />
                make your brand stand out from the crowd.
              </>
            )}
          </p>
          <div className="flex gap-x-[10px]">
            <TestLabelButton onClick={scrollToTestlabel} />
            <button
              type="button"
              className={`px-[30px] pt-[8.5px] pb-[10px] hover:text-white hover:bg-blue border border-blue bg-transparent text-blue
                        transition duration-[300ms] rounded-[0.5rem] font-radikal_medium text-[14px]`}
              onClick={scrollToInspired}
            >
              Get Inspired
            </button>
          </div>
        </div>
      </div>
      <div
        className="w-full md:w-[58.4%] md:mr-[-3.6rem] md:mt-[-2.7rem] relative z-[2]
        pt-[48px] md:pt-0 md:pr-[88px]"
      >
        <Media
          type="image"
          link="/images/try-it-hero.webp"
          blurLink="/images/try-it-hero.webp"
          containerClasses="w-full aspect-[1480/1230]"
        />
      </div>
    </div>
  )
}

export default HeroSection
