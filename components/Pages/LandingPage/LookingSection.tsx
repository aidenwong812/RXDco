import Media from "../../../shared/Media"
import GetInTouch from "../../GetInTouch"

const LookingSection = () => (
  <div
    className="w-full flex justify-center bg-lightgray
        px-[16px] md:px-[20px] xl:px-[70px] relative 2lg:pt-[100px] md:pb-[120px]"
  >
    <Media
      type="image"
      link="/images/looking_line.svg"
      blurLink="/images/looking_line.png"
      containerClasses="w-[900px] left-0 top-[350px] 
      md:left-auto md:top-auto md:bottom-[50px]
      md:w-full aspect-[1440/386] !absolute z-[1]"
    />
    <GetInTouch />
  </div>
)

export default LookingSection
