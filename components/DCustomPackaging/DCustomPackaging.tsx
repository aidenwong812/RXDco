import Popover from "../../shared/Popover"
import PackagesMenu from "./PackagesMenu"
import useIsLighMode from "../../hooks/useIsLightMode"
import Media from "../../shared/Media"

const DCustomPackaging = () => {
  const isLightMode = useIsLighMode()

  return (
    <Popover
      id="custom-packaing-menu"
      containerClassName="lg:pl-[30px] xl:pl-[40px] 2xl:pl-[50px] left-0"
    >
      <div className="flex items-center gap-[7px] py-[10px] lg:pl-[10px] lg:pr-[21px]">
        <p className={`${isLightMode ? "text-white" : "text-black"}`}>Custom Packaging</p>
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
      <PackagesMenu />
    </Popover>
  )
}

export default DCustomPackaging
