import Media from "../../../shared/Media"
import CTAButton from "../LandingPage/CTAButton"

const ReadyToRevolutionize = () => (
  <div
    className="w-full relative bg-secondarygray
      py-[60px] px-[32px] md:px-0 md:pb-[128px] md:pt-[132px] flex justify-center"
  >
    <div className="relative">
      <Media
        type="image"
        link="/images/branding_hero_oval.svg"
        blurLink="/images/branding_hero_oval.svg"
        containerClasses="w-[153px] md:w-[218px] aspect-[1/1] !absolute filter grayscale
            left-[-85px] md:left-[-128px] top-[-68px] opacity-[0.35] z-[0] !pointer-events-none"
      />
      <Media
        type="image"
        link="/images/development-how-it-works-leaf.svg"
        blurLink="/images/development-how-it-works-leaf.svg"
        containerClasses="w-[130px] h-[146px] 
        md:w-[191px] md:h-[215.04px] !absolute 
        right-[-42px] md:right-[-90px] 
        top-auto bottom-[-35px] md:bottom-auto md:top-[170px]
        z-[10] !pointer-events-none"
      />
      <div
        className="max-w-[788px] w-full bg-white rounded-[16px]
        flex flex-col items-center
        py-[40px] px-[38px] md:pt-[80px] md:pb-[64px] relative z-[2]"
      >
        <h2
          className="pb-[32px] text-[32px] md:text-[3rem] 
          leading-[40px] md:leading-[3.625rem] font-[400] text-center
          tracking-[-0.8px] text-black font-radikal_light"
        >
          Ready to revolutionize your packaging?
        </h2>
        <p
          className="pb-[24px] md:pb-[32px] font-[300] leading-[1.5] text-darkgray font-radikal_light
            text-[16px] text-center"
        >
          Contact our R&D team to get their creativity flowing.
        </p>
        <CTAButton
          href="/contact"
          className="!text-[14px] font-radikal_medium !mb-[16px] md:!mb-0 md:!mr-[24px]
            !py-[9.5px] md:!pt-[10px] md:!pb-[9px]
            !border-blue !bg-blue !text-white hover:!bg-white hover:!bg-white hover:!text-blue"
        >
          Get Started
        </CTAButton>
      </div>
    </div>
  </div>
)

export default ReadyToRevolutionize
