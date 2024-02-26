import Link from "next/link"
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper"
import { useState } from "react"
import Media from "../../../shared/Media"
import Slider from "../../../shared/Slider"
import data from "../../../utils/productshero.json"
import CTAButton from "../LandingPage/CTAButton"

const HeroSlides = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <Slider
      sliderProps={{
        modules: [EffectFade, Autoplay, Pagination, Navigation],
        centeredSlides: true,
        effect: "fade",
        speed: 500,
        pagination: {
          clickable: true,
        },
        autoplay: {
          delay: 4000,
        },
        onSlideChange: (swiperCtrl) => setSelectedIndex(swiperCtrl.realIndex),
        loop: true,
        fadeEffect: {
          crossFade: true,
        },
      }}
    >
      {data.map((product, i) => (
        <div
          className={`flex flex-col 3md:flex-row 
          w-full bg-white px-[16px] md:px-[32px] xl:px-[64px] pb-[32x] md:py-[32px] 
          cursor-pointer rounded-[0.8rem] ${i === selectedIndex ? "h-auto" : "h-0"}`}
          key={product.id}
        >
          <Link href={`/product/${product.id}`}>
            <div className="3md:flex flex-col pt-[80px] max-w-[320px] hidden">
              <p className="font-radikal_light text-black text-[64px] pb-[24px] leading-[100%] pt-[20px]">
                {product.name}
              </p>
              <p className="font-radikal_light text-darkgray text-[20px] pb-[100px]">
                {product.description}
              </p>
              <CTAButton
                className="!text-white !bg-black !w-fit
                                  hover:!bg-white hover:!text-black 
                                 !border-black"
                href={`/product/${product.id}`}
              >
                Learn more
              </CTAButton>
            </div>
          </Link>
          <div className="flex justify-center items-center h-[300px] 3md:h-auto 3lg:items-start overflow-hidden">
            <Media
              type="image"
              link={product.image}
              blurLink={product.image}
              containerClasses="w-full 3md:w-[530px] aspect-[1/1]"
            />
          </div>
          <Link href={`/product/${product.id}`}>
            <div className="flex 3md:hidden flex-col pt-[90px] md:pt-0">
              <p className="font-radikal_light text-black text-[40px] pb-[12px] leading-[100%] pt-[20px]">
                {product.name}
              </p>
              <p className="font-radikal_light text-darkgray text-[16px] pb-[24px]">
                {product.description}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  )
}

export default HeroSlides
