import Media from "../../../shared/Media"
import CTAButton from "../LandingPage/CTAButton"

const ReadyToClaim = () => (
  <div
    className="w-full flex justify-center py-[60px] md:py-[130px] bg-secondarygray
  px-[32px] md:px-0"
  >
    <div className="relative">
      <Media
        type="image"
        link="/images/branding_hero_oval.svg"
        blurLink="/images/branding_hero_oval.png"
        containerClasses="w-[153px] aspect-[1/1] md:w-[195px] md:aspect-[195/196] 
                    left-[-120px] top-[-60px] !absolute
                    opacity-[0.35] !pointer-events-none"
      />
      <Media
        type="image"
        link="/images/development-how-it-works-leaf.svg"
        blurLink="/images/development-how-it-works-leaf.svg"
        containerClasses="w-[130px] aspect-[130/146] md:w-[191px] md:aspect-[191/215] !absolute
                    right-[-40px] bottom-[-30px] md:bottom-[-50px] md:right-[-90px] z-[4] !pointer-events-none"
      />
      <div
        className="w-full md:w-[788px] bg-white rounded-[0.8rem] relative
                    md:pt-[80px] md:pb-[64px]
                    p-[40px] flex flex-col items-center"
      >
        <p
          className="text-[32px] md:text-[48px] text-black font-radikal_light pb-[32px] text-center
        leading-[120%]"
        >
          Ready to claim your look?
        </p>
        <p className="text-[16px] text-darkgray font-radikal_light pb-[24px] md:pb-[32px] text-center">
          Contact our sales team to talk through your packaging and branding needs.
        </p>
        <CTAButton
          className="!bg-blue !text-white hover:!bg-white hover:!text-blue !border-blue
                    !text-[14px] font-radikal_medium font-400 mb-[16px] md:mb-0"
          href="/contact"
        >
          Get Started
        </CTAButton>
      </div>
    </div>
  </div>
)

export default ReadyToClaim
