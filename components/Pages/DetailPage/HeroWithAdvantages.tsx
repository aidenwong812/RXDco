import useMedia from "../../../hooks/useMedia"
import { useDetail } from "../../../providers/DetailProvider"
import CTAButton from "../LandingPage/CTAButton"

const HeroWithAdvantages = () => {
  const { details } = useDetail()
  const isMobile = useMedia()

  return (
    <>
      <div
        className={`min-h-[766px] relative
        bg-[url('/images/detail_background.svg')]
        w-full pt-[85px] md:pt-[133px] px-[16px] md:px-[3rem]
        relative bg-lightgray
        md:flex md:flex-wrap md:justify-between`}
      >
        <div className="w-[100%] md:w-[25%] flex flex-col md:justify-center relative z-[2]">
          <p
            className={`font-radikal_light text-[64px] text-white px-[16px] md:px-0
              leading-[4.5rem] my-[42.88px] text-center md:text-left font-[300]
              ${!details?.advantages ? "w-full md:w-[540px] !text-center" : "w-full"}`}
          >
            {details?.name}
          </p>
          <p
            className={`text-center md:text-left font-[300]
              text-[16px] md:text-[25px] text-white font-radikal_light
              leading-[1.25] mb-[40px] md:px-0
              ${!details?.advantages ? "w-full md:w-[540px] !text-center" : "w-full"}`}
          >
            {details?.description}
          </p>
          <CTAButton
            className={`!bg-white !text-blue hover:!bg-blue hover:!text-white
              self-center md:self-start !font-[400px] !text-[14px] md:mx-0
              !border-none font-radikal_medium !px-[21px] !pt-[11px] !pb-[10px] !mb-[32px]
            ${!details?.advantages ? "!self-center" : ""}`}
            href="/request-a-sample"
          >
            Get a sample
          </CTAButton>
        </div>
        <div className="w-[100%] md:w-[33.33%] flex flex-col justify-end mx-auto my-0">
          <div className="w-full flex justify-center md:absolute md:left-0 md:bottom-0 z-[1]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={details?.hero_image} className="w-[650px]" alt="not found hero" />
          </div>
        </div>
        {!isMobile && (
          <div className="md:w-[25%] flex flex-col justify-center relative">
            <ul className="list-disc marker:text-white">
              {details?.advantages.map((data, i) => (
                <li
                  className="pb-[18px] text-[14px] font-radikal_light text-black md:text-white leading-[1.4]"
                  // eslint-disable-next-line react/no-array-index-key
                  key={i}
                >
                  {data}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {isMobile && (
        <ul className="pt-[120px] px-[54px] pb-[70px] bg-lightgray text-left">
          {details?.advantages.map((data, i) => (
            <li
              // eslint-disable-next-line no-octal-escape
              className="pb-[18px] px-0 text-[14px] font-radikal_light text-black leading-[1.4] text-left
            before:content-['\2022'] before:text-brown before:font-[700] before:text-[24px] before:w-[1em]
            before:ml-[-24px] before:inline-block"
              // eslint-disable-next-line react/no-array-index-key
              key={i}
            >
              {data}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default HeroWithAdvantages
