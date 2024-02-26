import Media from "../../../shared/Media"
import GetInTouch from "../../GetInTouch"

const LookingSection = () => (
  <div
    className={`w-full flex justify-center bg-lightgray 
    pt-0 md:pt-[215px] pb-[130px] md:pb-[235px] 
    relative overflow-hidden`}
  >
    <Media
      type="image"
      link="/images/looking_line.svg"
      blurLink="/images/looking_line.png"
      containerClasses="w-[770px] aspect-[770/206] md:w-full md:aspect-[1440/386] !absolute
      rotate-[33deg] md:rotate-[0deg]
      left-[-180px] top-[270px] md:top-[183px] md:left-0"
    />
    <div className="w-[54px] aspect-[1/1] absolute top-[186px] left-[80px] bg-red rounded-full hidden md:block" />
    <div className="w-[165px] aspect-[1/1] absolute top-[36px] right-[-60px] border border-green rounded-full hidden md:block" />
    <GetInTouch />
  </div>
)

export default LookingSection
