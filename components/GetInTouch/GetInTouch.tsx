import useMedia from "../../hooks/useMedia"
import CTAButton from "../Pages/LandingPage/CTAButton"

const GetInTouch = () => {
  const isMacbook = useMedia(1180)
  return (
    <div
      className="max-w-[310px] 2lg:max-w-[1113px] w-full
          flex flex-col 2lg:flex-row items-center 
          px-[26px] 2lg:px-[144px] border border-blue py-[80px] 2lg:py-[64px]
          rounded-[171px] gap-x-[110px] relative z-[2]"
    >
      <pre
        className="text-center 3lg:text-left text-black font-radikal_light 
        text-[28px] 3lg:text-[40px] leading-[120%] tracking-[-0.8px]"
      >
        {isMacbook ? (
          <>
            Looking for <br />
            something different?
          </>
        ) : (
          <>
            Looking for <br />
            something <br />
            different?
          </>
        )}
      </pre>
      <div className="flex flex-col pt-[1px]">
        <p
          className="text-center 2lg:text-left text-[16px] font-radikal_light text-black 
        pt-[32px] md:pt-[2px] leading-[1.5] ml-[0.5px]"
        >
          {isMacbook ? (
            <>
              The packaging options we can supply are limitless. If you haven’t found what you need
              here, our sales team can guide you through our extensive product line and help you
              find your perfect packaging.
            </>
          ) : (
            <>
              The packaging options we can supply are limitless. If you haven’t found
              <br />
              what you need here, our sales team can guide you through our
              <br />
              extensive product line and help you find your perfect packaging.
            </>
          )}
        </p>
        <CTAButton
          className="!border-blue !text-white !bg-blue hover:!text-blue hover:!bg-white 
          !px-[29.5px] mt-[32px] md:mt-[16px] ml-[1px]
          self-center 2lg:self-start text-[14px] !font-radikal_medium"
          href="/contact"
        >
          Get in touch
        </CTAButton>
      </div>
    </div>
  )
}

export default GetInTouch
