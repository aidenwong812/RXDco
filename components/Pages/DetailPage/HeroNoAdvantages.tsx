import { useDetail } from "../../../providers/DetailProvider"
import CTAButton from "../LandingPage/CTAButton"

const HeroNoAdvantages = () => {
  const { details } = useDetail()

  return (
    <div
      className={`min-h-[766px] relative
        bg-[url('/images/detail_background.svg')]
        w-full pt-[85px] md:pt-[133px] px-[16px] md:px-[3rem]
        relative bg-lightgray
        md:flex md:flex-wrap md:justify-between`}
    >
      <div className="w-[100%] flex justify-center mb-[40px] md:mb-0">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video src={details?.hero_video} className="w-[537.59px] rounded-[12px]" autoPlay />
      </div>
      <div className="w-[100%] flex flex-col items-center">
        <p
          className={`font-radikal_light text-[64px] text-white
              leading-[4.5rem] my-[42.88px] text-center font-[300]`}
        >
          {details?.name}
        </p>
        <p
          className={`text-center font-[300]
              text-[16px] md:text-[25px] text-white font-radikal_light
              leading-[1.25] mb-[40px] md:px-0 max-w-[540.8px]`}
        >
          {details?.description}
        </p>
        <CTAButton
          className={`!bg-white !text-blue hover:!bg-blue hover:!text-white
              self-center md:self-start !font-[400px] !text-[14px] md:mx-0
              !border-none font-radikal_medium !px-[20px] !mb-[32px]
            ${!details?.advantages ? "!self-center" : ""}`}
          href="/request-a-sample"
        >
          Get a sample
        </CTAButton>
      </div>
    </div>
  )
}

export default HeroNoAdvantages
