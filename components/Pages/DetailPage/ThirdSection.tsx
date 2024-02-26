import { useDetail } from "../../../providers/DetailProvider"
import Media from "../../../shared/Media"

const ThirdSection = () => {
  const { details } = useDetail()

  return (
    <div
      className={`w-full bg-gray md:bg-lightgray px-[18px] relative pt-[50px] md:pt-0 mt-[-70px]
      ${details?.advantages ? "md:mt-[-180px]" : "md:mt-[-70px]"}`}
    >
      <div className="absolute w-full h-[calc(100%-300px)] z-[1] left-0 top-[0px] md:block hidden bg-gray" />
      <Media
        type="image"
        link="/images/services_leaf--pink.svg"
        blurLink="/images/services_leaf--pink.png"
        containerClasses="w-[219px] md:w-[360px] aspect-[360/460] !absolute
        left-[-20px] top-[-260px] md:top-[-113.9px]
        md:left-[50px] z-[5]"
      />
      <div
        className="min-h-[550px] md:min-h-[700px] flex md:flex-row flex-col md:translate-x-[-45px]
      w-full justify-start md:justify-center items-center md:items-start relative z-[12]"
      >
        {details?.third_video ? (
          <video
            src={details?.third_video}
            muted
            autoPlay
            loop
            className="w-[90%] h-[308px] md:w-[708px] md:h-[470px] object-cover 
            rounded-[12px] shadow-[-24px_24px_#f0f0f0] md:ml-[4px]"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={details?.third_image}
            className="w-[90%] h-[308px] md:w-[708px] md:h-[470px] 
          rounded-[12px] shadow-[-24px_24px_#f0f0f0]"
            alt="not found assets"
          />
        )}
        <div
          className="h-full flex items-end absolute
          md:left-[62%] left-0 top-0"
        >
          <div
            className="py-[32px] md:py-[72px] w-[90%] md:w-[395px] 
          mt-[20px] md:mt-[-2px] md:ml-[-1px]
          px-[24px] md:px-[64px] w-[395px] bg-white rounded-[1rem]"
          >
            <h2
              className="text-[28px] md:text-[40px] text-brown font-radikal_light
              leading-[1.25]"
            >
              {details?.third_title}
            </h2>
            <p className="text-[16px] text-darkgray pt-[32px] font-radikal_light">
              {details?.third_description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdSection
