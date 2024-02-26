import useIsLighMode from "../../hooks/useIsLightMode"
import Media from "../../shared/Media"
import Popover from "../../shared/Popover"
import ServicesList from "./ServicesList"

const DServices = () => {
  const isLightMode = useIsLighMode()

  return (
    <Popover
      id="services-menu"
      containerClassName="lg:pl-[30px] xl:pl-[40px] 2xl:pl-[50px] left-0 !pt-0"
    >
      <div className="flex items-center gap-[7px] py-[10px] lg:pl-[10px] lg:pr-[11px]">
        <p className={`${isLightMode ? "text-white" : "text-black"}`}>Services</p>
        <Media
          type="image"
          link={
            isLightMode
              ? "/images/Icons/chevron-down-white.svg"
              : "/images/Icons/chevron-down-gold.svg"
          }
          blurLink={
            isLightMode
              ? "/images/Icons/chevron-down-white.png"
              : "/images/Icons/chevron-down-gold.png"
          }
          containerClasses="w-[10px] aspect-[10/6]"
        />
      </div>
      <ServicesList />
    </Popover>
  )
}

export default DServices
