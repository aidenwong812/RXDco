import { useMultipleSlides } from "../../../providers/MultipleSliderProvider"
import HeroSlider from "./HeroSlider"

const HeroSlides = () => {
  const { nextSlides } = useMultipleSlides()

  return (
    <>
      <div className="relative flex-grow" />
      <div
        className="w-[290px] md:w-[420px] lg:w-[520px] aspect-[1/1] relative z-[4] 
          bg-[#ffffffdb] shadow-[0_0_46px_0_#0000000f] rounded-[0.8em] md:overflow-hidden"
      >
        <HeroSlider index={0} />
      </div>
      <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center z-[3]">
        <div
          className="w-[390px] aspect-[1/1] relative translate-x-[8vw]
            overflow-hidden bg-[#ffffffdb] shadow-[0_0_46px_0_#0000000f] rounded-[0.8em]"
        >
          <HeroSlider size={390} index={1} />
        </div>
      </div>
      <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center z-[2]">
        <div
          className="w-[273px] aspect-[1/1] relative translate-x-[15vw]
            overflow-hidden bg-[#ffffffdb] shadow-[0_0_46px_0_#0000000f] rounded-[0.8em]"
        >
          <HeroSlider size={273} index={2} />
        </div>
      </div>
      <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center z-[1]">
        <div
          className="w-[117px] aspect-[1/1] relative translate-x-[22vw]
            overflow-hidden bg-[#ffffffdb] shadow-[0_0_46px_0_#0000000f] rounded-[0.8em]"
        >
          <HeroSlider size={117} index={3} />
        </div>
      </div>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        type="button"
        className="relative flex-grow h-full cursor-[url('/images/next.svg'),_pointer] z-[4]"
        onClick={nextSlides}
      />
    </>
  )
}

export default HeroSlides
