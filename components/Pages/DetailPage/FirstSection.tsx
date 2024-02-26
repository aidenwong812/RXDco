import { useDetail } from "../../../providers/DetailProvider"

const FirstSection = () => {
  const { details } = useDetail()

  return (
    <div
      className={`w-full bg-lightgray md:bg-gray flex justify-center
      px-[18px] md:px-0 relative ${
        details?.advantages ? "pt-[0px]" : "pt-[80px]"
      } md:pt-[161px] relative z-[4]`}
    >
      <div className="absolute w-full h-[calc(100%-133px)] bg-white top-0 hidden md:block" />
      <div
        className="max-w-[1275px] w-full md:px-[18px]
      flex flex-wrap justify-center mb-[40px] md:mb-[80px]"
      >
        <div className="md:p-[92px] w-full md:w-[41.67%] z-[10] relative pb-[50px]">
          <h1 className="text-[28px] md:text-[40px] leading-[1.25] mb-[32px] text-brown font-radikal_light">
            {details?.first_title}
          </h1>
          <p className="text-darkgray leading-[1.5] font-[300] text-[16px] font-radikal_light">
            {details?.first_description}
          </p>
        </div>
        <div className="w-full md:w-[532px] relative z-0 pb-[86.25%] md:pb-0">
          <div
            className="w-[161px] md:w-[461px] aspect-[1/1] border border-green
            top-[191px] md:top-[350px] left-[unset] right-[-45px] 
            md:left-[392px] absolute rounded-full"
          />
          {details?.first_video ? (
            <video
              src={details?.first_video}
              muted
              autoPlay
              loop
              className="w-[100%] absolute h-full top-0 left-0 object-cover
              rounded-[12px] shadow-[15px_-16px_#f0f0f0]"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={details?.first_image}
              className="w-[100%] h-[100%] absolute top-0 left-0
              rounded-[12px] shadow-[15px_-16px_#f0f0f0] object-cover"
              alt="not found assets"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default FirstSection
