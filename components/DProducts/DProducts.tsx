import { useRouter } from "next/router"
import Popover from "../../shared/Popover"
import ProductSlider from "./ProductSlider"
import useIsLighMode from "../../hooks/useIsLightMode"
import Media from "../../shared/Media"

const DProducts = () => {
  const router = useRouter()
  const isLightMode = useIsLighMode()

  return (
    <Popover
      id="products-menu"
      containerClassName="lg:pl-[30px] xl:pl-[40px] 2xl:pl-[50px] left-0 !pt-0"
    >
      <button
        className="flex items-center gap-[7px] py-[10px] lg:pl-[10px] lg:pr-[21px]"
        type="button"
        onClick={() => router.push("/products")}
      >
        <p className={`${isLightMode ? "text-white" : "text-black"}`}>Products</p>
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
      </button>
      <ProductSlider />
    </Popover>
  )
}

export default DProducts
