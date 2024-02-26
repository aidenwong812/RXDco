import Media from "../../../shared/Media"
import CTAButton from "../LandingPage/CTAButton"

const NeedMoreSection = () => (
  <div
    className="mb-[60px] md:mb-[235px] md:pt-[1rem] 
        px-[1rem] md:px-[3rem]
        flex justify-center relative"
  >
    <Media
      type="image"
      link="/images/looking_line.svg"
      blurLink="/images/looking_line.svg"
      containerClasses="w-[778px] md:w-full aspect-[1440/386] !absolute
                top-unset bottom-[-95px] left-[-180px] rotate-[33deg] md:rotate-0
                md:top-[-1rem] md:left-0 md:bottom-auto"
    />
    <div
      className="hidden md:block w-[40px] aspect-[1/1] rounded-full bg-iblue
            absolute z-[1] top-[-13px] left-[80px]"
    />
    <div
      className="w-[98px] md:w-[165px] aspect-[1/1] rounded-full border border-green
            absolute z-[1] top-[-30px] left-[39px] md:left-auto right-auto md:right-[-60px]"
    />
    <div
      className="py-[80px] px-[26px] md:py-[4em] md:px-[9rem]
            md:grid md:grid-cols-3 md:gap-x-[9rem] relative z-[2]
            border border-blue rounded-full max-w-[310px] md:max-w-[1113px] w-full"
    >
      <p
        className="md:mr-[-3rem] text-[28px] md:text-[2.5rem] 
                mb-[32px] md:mb-0
                leading-[1.214] md:leading-[3rem] text-center md:text-left
                tracking-[-0.8px] md:tracking-[-0.8px] font-[400] font-radikal_light"
      >
        Need more info?
      </p>
      <div
        className="md:col-span-2 md:ml-[-0.5rem]
      flex md:block flex-col items-center"
      >
        <p
          className="mb-[32px] md:mb-[1rem] md:mt-[0.5rem] font-radikal_light
                    font-[300] leading-[1.5] text-[16px] text-black text-center md:text-left"
        >
          The packaging options we can supply are limitless. If you haven’t found what you need
          here, our sales team can guide you through our extensive product line and help you find
          your perfect packaging.
        </p>
        <CTAButton
          href="/contact"
          className="!border-blue !text-white !bg-blue hover:!text-blue hover:!bg-white 
                        !px-[29.5px] !pb-[9.6px] md:!pb-[9px]
                        self-center 2lg:self-start text-[14px] !font-radikal_medium"
        >
          Get in touch
        </CTAButton>
      </div>
    </div>
  </div>
)

export default NeedMoreSection
