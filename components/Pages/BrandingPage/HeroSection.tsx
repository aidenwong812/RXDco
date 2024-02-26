import useMedia from "../../../hooks/useMedia"
import Media from "../../../shared/Media"
import CTAButton from "../LandingPage/CTAButton"

const HeroSection = () => {
  const isMobile = useMedia()

  return (
    <div
      className="w-full relative bg-secondarygray
              2lg:grid 2lg:grid-cols-12 pt-[100px] gap-x-[50px]
              xl:px-[90px] relative z-[5]"
    >
      <Media
        type="image"
        link="/images/branding_hero_circle--blue.svg"
        blurLink="/images/branding_hero_circle--blue.svg"
        containerClasses="w-[92px] 2lg:w-[184px] aspect-[92/71] 2lg:aspect-[184/142] !absolute 
        2lg:bottom-[-90px] 2lg:right-[90px] !pointer-events-none 
        bottom-[-50px] right-[160px] z-[4]"
      />
      <Media
        type="image"
        link="/images/branding_hero_oval.svg"
        blurLink="/images/branding_hero_oval.svg"
        containerClasses="w-[206px] aspect-[1/1] 2lg:w-[195px] 2lg:aspect-[195/196] 
        !absolute 2lg:top-[6rem] 2lg:left-[330px]
        left-[122px] top-[71px] !pointer-events-none
        opacity-[0.2] 2lg:opacity-[1]"
      />
      <Media
        type="image"
        link="/images/branding_hero_curve.svg"
        blurLink="/images/branding_hero_curve.svg"
        containerClasses="w-[890px] md:w-full aspect-[1440/386] !absolute 
        2lg:top-[310px] top-[580px] z-[4] lg:z-auto"
      />
      <div
        className="w-[50px] aspect-[1/1] absolute 
      2lg:top-[310px] 2lg:left-[40px] left-auto right-[32px] top-[405px]
      bg-red rounded-full block"
      />
      <div className="w-full flex justify-center 2lg:col-span-4 2lg:pt-[100px] px-[18px] 2lg:px-0 relative z-[5]">
        <div className="md:pl-[40px] w-[318px] md:w-auto">
          <p
            className="text-[40px] 2lg:text-[64px] font-radikal_light leading-[120%] md:leading-[110%] 
          mb-[20px] md:mb-[2rem] tracking-[-0.8px]"
          >
            {isMobile ? (
              <>
                Branding and <br />
                design
              </>
            ) : (
              <>
                Branding <br />
                and design
              </>
            )}
          </p>
          <p className="font-radikal_light text-[20px] text-darkgray leading-[140%] mb-[2rem]">
            Put your own stamp on our <br /> packaging with our branding and <br /> custom design
            services.
          </p>
          <CTAButton
            href="/contact"
            className="!bg-black !text-white hover:!bg-white hover:!text-black font-400 font-radikal_medium
            !text-[14px]"
          >
            Get started
          </CTAButton>
        </div>
      </div>
      <div className="mt-[48px] 2lg:mt-0 pl-[55px] md:pl-[40px] 2lg:col-span-8 flex 2lg:justify-end">
        <Media
          type="image"
          link="/images/RXD-Co-The-Cannabic-pre-roll-packaging_2022-10-21-153406_ezsi.webp"
          blurLink="/images/RXD-Co-The-Cannabic-pre-roll-packaging_2022-10-21-153406_ezsi.webp"
          containerClasses="w-full aspect-[1/1] rounded-r-0 rounded-l-[0.5rem] 2lg:rounded-[24px] overflow-hidden max-w-[766px]
                      shadow-[24px_24px_0_#fff]"
        />
      </div>
    </div>
  )
}

export default HeroSection
