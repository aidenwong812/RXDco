import useMedia from "../../../hooks/useMedia"
import Media from "../../../shared/Media"
import CTAButton from "../LandingPage/CTAButton"

const HeroSection = () => {
  const isMobile = useMedia()

  return (
    <div
      className="w-full relative bg-secondarygray md:px-[97px]
        pt-[115px] md:pt-[8.3rem] pb-[80px] md:pb-[200px] grid grid-cols-1 md:grid-cols-2"
    >
      {!isMobile && (
        <div
          className="w-[20px] aspect-[1/1] bg-[#10016a12] rounded-full
       flex justify-center items-center absolute left-[109px] top-[120px]"
        >
          <div className="w-[8px] aspect-[1/1] bg-blue rounded-full opacity-[0.7]" />
        </div>
      )}
      <svg
        viewBox="0 0 1440 472"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[1000px] md:w-full absolute 
        top-[20.55%] md:top-auto md:bottom-[71px] left-0"
      >
        <path
          d="m-291 90.047 231.24-73.325C114.395-38.503 299.853 60.55 350.805 236.005v0c59.452 204.723 296.51 297.823 479.388 188.269l161.412-96.695c142.794-85.54 324.814-67.079 447.524 45.388l70.87 64.951"
          stroke="#D1D5D5"
          stroke-linecap="square"
        />{" "}
        <circle cx="524" cy="438" r="22" fill="#67DAA0" />
      </svg>
      {isMobile && (
        <div className="px-[16px] mt-[1px] realtive z-[2]">
          <Media
            type="image"
            link="https://rxdcoassets.b-cdn.net/blog/_576x464_crop_center-center_none/sustainability.jpg"
            blurLink="https://rxdcoassets.b-cdn.net/blog/_576x464_crop_center-center_none/sustainability.jpg"
            containerClasses="w-full aspect-[351/282.75] 
              md:w-[582px] md:aspect-[582/468.83]
              rounded-[24px] overflow-hidden md:shadow-[24px_24px_0_#fff]"
          />
        </div>
      )}
      <div className="py-[24px] md:py-[48px] realtive z-[2] px-[16px] md:px-0 md:ml-[-0.5px]">
        <p
          className="text-[32px] md:text-[3rem] 
        leading-[1.2] md:leading-[3.625rem] font-[400] font-radikal_light 
        pb-[21.44px] md:pb-[32.16px] md:pr-[18px]"
        >
          {isMobile ? (
            <>The Time for Sustainability in Cannabis Packaging is Now</>
          ) : (
            <>
              The Time for <br />
              Sustainability in <br />
              Cannabis Packaging is <br />
              Now
            </>
          )}
        </p>
        <p
          className="text-[16px] md:text-[18px] 
        leading-[1.4] 
        pb-[24px] md:pb-[32px] font-[300] text-darkgray font-radikal_light"
        >
          A cleaner environment, more business for your brand.
        </p>
        <CTAButton
          href="/blog/the-time-for-sustainability-in-cannabis-packing-is-now"
          className="!border-blue !bg-blue !text-white hover:!bg-white hover:!text-blue
              font-radikal_medium !text-[14px] !py-[9.6px] md:!pb-[9px] !px-[30px]"
        >
          Read More
        </CTAButton>
        {isMobile && (
          <div className="w-full flex justify-center pt-[32px]">
            <div
              className="w-[20px] aspect-[1/1] bg-[#10016a12] rounded-full
          flex justify-center items-center ml-[-1px]"
            >
              <div className="w-[8px] aspect-[1/1] bg-blue rounded-full opacity-[0.7]" />
            </div>
          </div>
        )}
      </div>
      {!isMobile && (
        <div className="px-[18px] mt-[-17px] realtive z-[2]">
          <Media
            type="image"
            link="https://rxdcoassets.b-cdn.net/blog/_576x464_crop_center-center_none/sustainability.jpg"
            blurLink="https://rxdcoassets.b-cdn.net/blog/_576x464_crop_center-center_none/sustainability.jpg"
            containerClasses="w-[582px] aspect-[582/468.83] w-[calc(100% - 24px)]
              rounded-[24px] overflow-hidden shadow-[24px_24px_0_#fff]"
          />
        </div>
      )}
    </div>
  )
}

export default HeroSection
