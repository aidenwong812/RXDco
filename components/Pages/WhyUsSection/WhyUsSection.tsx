import useMedia from "../../../hooks/useMedia"
import Media from "../../../shared/Media"

const WhyUsSection = ({ className = "" }) => {
  const isMobile = useMedia()

  return (
    <div
      className={`w-full relative mt-[260px] md:mt-0 bg-lightgray
      px-[16px] md:px-[20px] xl:px-[70px] relative 2lg:pt-[100px] 
      pb-[90px] md:pb-[120px] ${className}`}
    >
      {isMobile && (
        <div
          className="md:p-[16px] md:pr-0 bg-secondarygray rounded-[0.8rem] md:rounded-l-[0.8rem] md:rounded-r-[0px]
              !absolute top-[-230px] md:!right-0 md:top-0 z-[1] md:z-[3] w-fit"
        >
          <div className="relative">
            <Media
              type="image"
              link="/images/Syringes.webp"
              blurLink="/images/Syringes.webp"
              containerClasses="w-[302px] md:w-[300px] lg:w-[330px] 2lg:w-[400px] xl:w-[453px]  relative z-[2]
                        aspect-[1/1] rounded-[0.8rem] md:rounded-l-[0.8rem] md:rounded-r-[0px] overflow-hidden"
            />
            <div className="block md:hidden z-[1] absolute left-[15px] bottom-[15px] bg-secondarygray w-full h-full rounded-[0.5rem]" />
          </div>
        </div>
      )}
      <Media
        type="image"
        link="/images/green_leaf.svg"
        blurLink="/images/green_leaf.png"
        containerClasses="w-[303px] aspect-[303/334] !absolute top-[190px] z-[1] left-[-85px] block md:hidden"
      />
      <div className="absolute bg-[#becbdd] bottom-[-120px] right-[40px] w-[198px] aspect-[1/1] rounded-full block md:hidden" />
      <p className="text-black font-radikal_light text-[40px] md:block hidden tracking-[-0.8px] pb-[10px]">
        Why us?
      </p>
      <div
        className="bg-white px-[24px] md:pl-[48px] lg:pl-[96px] md:pr-[320px] 3md:pr-[33%] 
              md:py-[48px] py-[32px] rounded-[0.5rem] z-[2] relative ml-0 samsungS8:ml-[26px] md:ml-0
              grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 3md:grid-cols-2 md:gap-y-[1rem]"
      >
        <div className="col-span-1 sm:col-span-2 block md:hidden">
          <p className="text-black font-radikal_light text-[28px] block md:hidden  pb-[16px]">
            Why us?
          </p>
        </div>
        <div className="py-[16px] md:p-[16px]">
          <Media
            type="image"
            link="/images/box.svg"
            blurLink="/images/box.png"
            containerClasses="w-[25px] aspect-[25/24]"
          />
          <p
            className="font-radikal_light text-black text-[20px] md:text-[24px]
          pt-[16px] pb-[14px] leading-[1.5rem]"
          >
            Expertise
          </p>
          <p className="w-[90%] md:w-full text-[16px] font-radikal_light text-darkgray leading-[1.5] md:max-w-[333px]">
            Founded on four generations of experience in the packaging industry.
          </p>
        </div>
        <div className="py-[16px] md:p-[16px]">
          <Media
            type="image"
            link="/images/bolt.svg"
            blurLink="/images/bolt.png"
            containerClasses="w-[25px] aspect-[25/24]"
          />
          <p
            className="font-radikal_light text-black text-[20px] md:text-[24px]
            pt-[16px] pb-[14px] leading-[1.5rem]"
          >
            Innovation
          </p>
          <p className="w-[90%] md:w-full text-[16px] font-radikal_light text-darkgray max-w-[333px] leading-[1.5]">
            Always thinking ahead to break new ground and set industry trends.
          </p>
        </div>
        <div className="py-[16px] md:p-[16px]">
          <Media
            type="image"
            link="/images/colours.svg"
            blurLink="/images/colours.png"
            containerClasses="w-[25px] aspect-[25/24]"
          />
          <p
            className="font-radikal_light text-black text-[20px] md:text-[24px]
            pt-[16px] pb-[14px] leading-[1.5rem]"
          >
            Sustainability
          </p>
          <p className="w-[90%] md:w-full text-[16px] font-radikal_light text-darkgray md:max-w-[333px] leading-[1.5]">
            Committed to sourcing and developing sustainable compliance packaging.
          </p>
        </div>
        <div className="py-[16px] md:p-[16px]">
          <Media
            type="image"
            link="/images/lock-alt.svg"
            blurLink="/images/lock-alt.png"
            containerClasses="w-[25px] aspect-[25/24]"
          />
          <p
            className="font-radikal_light text-black text-[20px] md:text-[24px]
            pt-[16px] pb-[14px] leading-[1.5rem]"
          >
            Safety
          </p>
          <p className="w-[90%] md:w-full text-[16px] font-radikal_light text-darkgray max-w-[333px] leading-[1.5]">
            Our packaging meets strict regulations to keep your customers safe.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhyUsSection
