import Media from "../../../shared/Media"
import GetInTouch from "./GetInTouch"

const SubmitSection = () => (
  <div
    className="grid grid-cols-1 md:grid-cols-11 
    pt-[120px] md:pt-[140px] px-[16px] md:px-[100px] 
  gap-y-[70px] md:gap-x-[30px] relative bg-lightgray"
  >
    <div
      className="!absolute w-[810px] aspect-[810/884] top-0 right-0
    bg-[url('/images/contact-bg.png')] bg-cover"
    />
    <div className="md:col-span-4 relative z-[2]">
      <GetInTouch />
    </div>
    <div className="md:col-span-7 relative z-[2]">
      <div
        className="shadow-[0_20px_40px_0_rgba(54,54,54,.03)] 
        px-[8px] pt-[8px] py-[12px] !bg-[white] rounded-[0.5rem] max-w-[790px] w-full"
      >
        <p
          className="py-[17px] px-[32px] bg-white rounded-[0.5rem] text-[20px] 
          font-radikal_light text-black shadow-[0_20px_40px_0_rgba(54,54,54,.03)]
          absolute left-[20px] top-[20px] z-[2]"
        >
          Our Facilities
        </p>
        <Media
          type="image"
          link="https://rxdcoassets.b-cdn.net/contact-map_2021-01-15-140029.png?fit=fit&width=1600&height=1160&fm=jpeg&auto=format"
          blurLink="https://rxdcoassets.b-cdn.net/contact-map_2021-01-15-140029.png?fit=fit&width=1600&height=1160&fm=jpeg&auto=format"
          containerClasses="w-full aspect-[790/571]"
        />
      </div>
    </div>
  </div>
)

export default SubmitSection
