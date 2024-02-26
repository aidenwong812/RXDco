import Media from "../../../shared/Media"
import GetInTouch from "../../GetInTouch"

const LookingSection = () => (
  <div className="w-full flex justify-center bg-lightgray py-[100px] 3lg:py-[200px] relative overflow-hidden">
    <Media
      type="image"
      link="/images/looking_line.svg"
      blurLink="/images/looking_line.png"
      containerClasses="w-[1500px] md:w-full aspect-[1440/386] !absolute
        left-[-250px] top-[250px] md:left-0 md:top-[160px] !pointer-events-none"
    />
    <Media
      type="image"
      link="/images/looking_leaf.svg"
      blurLink="/images/looking_leaf.png"
      containerClasses="3md:block hidden w-[308px] aspect-[308/238] !absolute bottom-[-110px] left-[-50px] z-[2] !pointer-events-none"
    />
    <Media
      type="image"
      link="/images/services_circle3.svg"
      blurLink="/images/services_circle3.png"
      containerClasses="3md:block hidden w-[316px] aspect-[316/208] !absolute bottom-[-90px] right-[20%] z-[2] !pointer-events-none"
    />
    <GetInTouch />
  </div>
)

export default LookingSection
