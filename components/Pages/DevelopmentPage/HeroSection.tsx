import useMedia from "../../../hooks/useMedia"
import Media from "../../../shared/Media"
import CTAButton from "../LandingPage/CTAButton"

const HeroSection = () => {
  const isMobile = useMedia()

  return (
    <div
      className="w-full relative bg-secondarygray
      2lg:grid 2lg:grid-cols-2 
      pt-[100px] md:px-[48px] md:pt-[204px] pb-[44px]"
    >
      <Media
        type="image"
        link="/images/development-hero-curve.svg"
        blurLink="/images/development-hero-curve.svg"
        containerClasses="!absolute md:bottom-[-14.5rem] 
        z-[2] md:z-[1] 
        w-[890px] md:w-full aspect-[1440/344]
        rotate-[-21deg] md:rotate-0 scale-x-[-1] md:scale-x-[1]
        left-[-30px] md:left-auto top-[36.5rem] md:top-auto !pointer-events-none"
      />
      <div
        className="w-[56px] md:w-[100px] aspect-[1/1] bg-green rounded-full
              absolute top-[464px] left-auto right-[28px] 
              md:right-auto md:top-[154px] md:left-[50%] 
              ml-0 md:ml-[-125px] z-[5]"
      />
      <div
        className="w-[195px] aspect-[1/1] border border-iblue rounded-full
              absolute top-[87px] md:top-[190px] right-[-117px] z-[1]"
      />
      <Media
        type="image"
        link="/images/development-hero.webp"
        blurLink="/images/development-hero.webp"
        containerClasses="!absolute w-[638px] aspect-[1/1] top-0 left-0
                  rounded-r-[12px] overflow-hidden shadow-[-32px_32px_0_#fff] md:block hidden"
      />
      {!isMobile && <div />}
      <div className="flex justify-center px-[16px] md:px-0 relative z-[4]">
        <div className="max-w-[408px] w-full">
          <p
            className="text-[40px] md:text-[64px] pb-[32px] tracking-[-0.8px] font-radikal_light text-black
                    leading-[1.2] md:leading-[4.5rem]"
          >
            Packaging <br /> development
          </p>
          <p className="text-[20px] text-darkgray font-radikal_light leading-[1.75rem] pb-[2rem]">
            Work with our in-house R&D
            <br />
            team to develop custom
            <br />
            engineered compliance
            <br />
            packaging to elevate your
            <br />
            brand.
          </p>
          <CTAButton
            href="/contact"
            className="!font-radikal_medium !text-[14px] !w-fit !py-[9.6px] 
                    !bg-blue !border-blue hover:!bg-white hover:!text-blue"
          >
            Get started
          </CTAButton>
        </div>
      </div>
      {isMobile && (
        <div className="pt-[40px] xl:px-[90px]">
          <Media
            type="image"
            link="/images/development-hero.webp"
            blurLink="/images/development-hero.webp"
            containerClasses="w-[319px] z-[1] aspect-[1/1] rounded-r-[0.5rem]
          overflow-hidden shadow-[-24px_24px_0_#fff]"
          />
        </div>
      )}
    </div>
  )
}

export default HeroSection
