import Link from "next/link"
import { Autoplay } from "swiper"
import Slider from "../../../shared/Slider"
import data from "../../../utils/landing-hero.json"
import Media from "../../../shared/Media"
import useMedia from "../../../hooks/useMedia"
import { useMultipleSlides } from "../../../providers/MultipleSliderProvider"

const HeroSlider = ({ size = 520, index }) => {
  const { setSwiperCtrl } = useMultipleSlides()

  const isNoteBook = useMedia(1024)
  const isMobile = useMedia(1024)

  return (
    <Slider
      className="!overflow-visible md:!overflow-hidden"
      sliderProps={{
        loop: true,
        slidesPerView: 1,
        initialSlide: index,
        grabCursor: true,
        simulateTouch: false,
        onSwiper: (swiperCtrl) => setSwiperCtrl(swiperCtrl, index),
        modules: [Autoplay],
        autoplay: {
          delay: 3000,
        },
      }}
    >
      {data.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`}>
          <div
            className={`relative cursor-pointer md:cursor-[url('/images/crosshair.svg'),_pointer]`}
          >
            <Media
              type="image"
              link={product.image}
              blurLink={product.image}
              containerClasses="aspect-[1/1] z-[2]"
              containerStyle={{
                width: `${size}px`,
              }}
            />
            {size === 520 ||
              (isNoteBook && !isMobile && (
                <div
                  className="absolute w-full h-full flex justify-end items-end p-[16px] z-[3] cursor-[url('/images/crosshair.svg'),_pointer]
                            hover:opacity-[1] opacity-[0] transition duration-[325ms]
                            left-0 top-0"
                >
                  <div className="max-w-[240px] p-[24px] bg-[#fff] rounded-[8px] font-radikal_light text-[16px]">
                    <h5 className="font-radikal_medium pb-[5px]">{product.name}</h5>
                    <p className="text-[14px]">{product.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </Link>
      ))}
    </Slider>
  )
}

export default HeroSlider
