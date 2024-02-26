import TrendingList from "./TrendingList"

const TrendingSection = () => (
  <div
    className="w-full relative bg-secondarygray md:px-[78px]
                    pt-[40px] md:pt-[42px] pb-[4.5rem]
              border-t border-t-mediumgray md:border-none"
  >
    <p
      className="text-black font-radikal_light text-center md:text-left
            mx-[18px] mb-[48px] text-[1.75rem] font-[400] leading-[2.125rem]"
    >
      You may also like...
    </p>
    <div className="flex flex-wrap w-full ml-[2px]">
      <TrendingList />
    </div>
  </div>
)

export default TrendingSection
