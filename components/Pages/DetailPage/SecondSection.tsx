import useMedia from "../../../hooks/useMedia"
import { useDetail } from "../../../providers/DetailProvider"

const SecondSection = () => {
  const { details } = useDetail()
  const isMobile = useMedia()

  return (
    <div
      className={`w-full bg-gray md:mb-[80px] flex justify-center relative
        px-[18px] md:px-0 pt-[100px] md:pt-[118px] pb-[100px]`}
    >
      <div
        className="w-[58px] md:w-[145px] h-[1px] rounded-full bg-igray
          absolute right-[30px] bottom-[53px] md:right-[50px] md:bottom-[274px] z-[10]"
      />
      <div
        className="w-[82px] md:w-[135px] aspect-[1/1] rounded-full bg-green
          absolute bottom-[0px] right-[-18px] md:right-[-38px] md:bottom-[180px] z-[9]"
      />
      <div
        className="max-w-[1275px] w-full md:px-[18px] relative z-[100]
        flex flex-wrap justify-center mb-[40px] md:mb-[80px]"
      >
        <div className="w-full md:w-[531px] relative z-[100] pr-[26px]">
          <div
            className="w-[46px] md:w-[161px] aspect-[1/1] rounded-full bg-red
            absolute left-[32px] top-[-88px] md:left-[-211px] md:top-[-200px] z-[1]"
          />
          {!isMobile && (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <>
              {details?.second_video ? (
                <video
                  src={details?.second_video}
                  muted
                  autoPlay
                  loop
                  className="w-[100%] absolute h-full top-0 left-0 object-cover
                  rounded-[12px] shadow-[26px_26px_#fff]"
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={details?.second_image}
                  className="w-[100%] h-[448px] rounded-[12px] shadow-[26px_26px_#fff]"
                  alt="not found assets"
                />
              )}
            </>
          )}
        </div>
        <div className="md:p-[92px] w-full md:w-[41.67%] z-[10] relative">
          <h1 className="text-[28px] md:text-[40px] leading-[1.25] mb-[32px] text-brown font-radikal_light">
            {details?.second_title}
          </h1>
          <p className="text-darkgray leading-[1.5] font-[300] text-[16px] font-radikal_light">
            {details?.second_description}
          </p>
        </div>
        <div className="w-full h-[308px] relative z-[100] block md:hidden mt-[50px]">
          {details?.second_video ? (
            <video
              src={details?.second_video}
              muted
              autoPlay
              loop
              className="w-[100%] absolute h-full top-0 left-0 object-cover
                    rounded-[12px] shadow-[26px_26px_#fff]"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={details?.second_image}
              className={`${details?.advantages ? "w-[100%] h-[448px]" : "w-[321px] h-[287px]"}
              rounded-[12px] shadow-[26px_26px_#fff]`}
              alt="not found assets"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default SecondSection
