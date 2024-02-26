import { useDetail } from "../../../providers/DetailProvider"
import Media from "../../../shared/Media"
import PlaceOrder from "./PlaceOrder"
import TryOnSize from "./TryOnSize"

const CTASection = () => {
  const { details } = useDetail()

  return (
    <div
      className={`w-full flex flex-col lg:flex-row relative bg-lightgray
      px-[16px] md:px-[20px] xl:px-[70px]
      grid grid-cols-1
      pt-[130px] md:pt-[155px]
      ${details?.size_enabled ? "md:grid-cols-2 pb-[70px]" : "md:grid-cols-1 pb-0"}`}
    >
      <Media
        type="image"
        link="/images/product_actions.svg"
        blurLink="/images/product_actions.png"
        containerClasses="w-[720px] md:w-full aspect-[1369/439] 
        !absolute left-[-180px] top-0 md:top-[102px] md:left-auto"
      />
      <div
        className={`bg-iblue absolute w-[82px] md:w-[135px] aspect-[1/1] md:left-[-32px]
        ${
          details?.size_enabled
            ? "bottom-[20px] left-[-65px]"
            : "left-[-65px] bottom-[0px] md:bottom-[80px]"
        } rounded-full`}
      />
      <div
        className={`bg-igray absolute w-[58px] md:w-[145px] h-[1px]
         rounded-full md:left-[22px]
         ${
           details?.size_enabled
             ? "bottom-[70px] left-0 md:bottom-[97px]"
             : "bottom-[50px] md:bottom-[157px]"
         }`}
      />
      <div
        className={`flex relative z-[2] mb-[50px] md:mb-[129px] ${
          details?.size_enabled ? "justify-end md:mr-[36px]" : "justify-center md:mr-[32px]"
        }`}
      >
        <PlaceOrder />
      </div>
      {details?.size_enabled && (
        <div className="flex justify-start relative z-[2] md:mt-[129px]">
          <TryOnSize />
        </div>
      )}
    </div>
  )
}

export default CTASection
