import { useState } from "react"
import { useProducts } from "../../providers/ProductsProvider"
import Icon from "../../shared/Icon"
import Slider from "../../shared/Slider"
import ProductItem from "./ProductItem"

const ProductSlider = () => {
  const { products } = useProducts()
  const [swiper, setSwiper] = useState<any>(null)
  const [selectedIndex, setSelectedIndex] = useState(1)

  const nextSlide = () => {
    if (selectedIndex === products.length - 1) return

    const temp = selectedIndex

    setSelectedIndex(temp + 1)
    swiper.slideTo(temp + 1)
  }

  const prevSlide = () => {
    if (selectedIndex === 0) return

    const temp = selectedIndex

    setSelectedIndex(temp - 1)
    swiper.slideTo(temp - 1)
  }

  return (
    <div
      className="fixed left-0 pt-[50px] cursor-pointer rounded-[.5rem]
        w-screen flex justify-center 
        lg:px-[24px] xl:px-[36px] 2xl:px-[48px]"
    >
      <div
        className="2xl:w-[1344px] xl:w-[1280px] lg:w-[100%] md:w-[768px] bg-white
            lg:px-[20px] xl:px-[30px] rounded-[.5rem] py-[30px] relative shadow-[0_20px_40px_0_rgba(54,54,54,.09)]"
      >
        <div className="absolute h-full flex items-center justify-between left-[-20px] top-0 z-[2]">
          <button
            type="button"
            onClick={prevSlide}
            className="w-[48px] aspect-[1/1] flex items-center justify-center bg-[#000000a3] hover:bg-black transition duration-[0.2s] rounded-full"
          >
            <Icon name="chevron-back" color="white" size={25} raw />
          </button>
        </div>
        <div className="absolute h-full flex items-center right-[-20px] top-0 z-[2]">
          <button
            type="button"
            onClick={nextSlide}
            className="w-[48px] aspect-[1/1] flex items-center justify-center bg-[#000000a3] rounded-full transition duration-[0.2s] 
            hover:bg-black"
          >
            <Icon name="chevron-forward" color="white" size={25} raw />
          </button>
        </div>
        <Slider
          sliderProps={{
            slidesPerView: 5,
            spaceBetween: 10,
            loop: true,
            onSwiper(swiperCtrl) {
              setSwiper(swiperCtrl)
            },
          }}
          className="relative z-[1]"
        >
          {products.map((product) => (
            <ProductItem key={product.id} data={product} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default ProductSlider
