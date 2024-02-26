import { useEffect, useState } from "react"
import Slider from "../../../shared/Slider"
import data from "../../../utils/brands.json"
import useMedia from "../../../hooks/useMedia"

const BrandSlides = () => {
  const [swiper, setSwiper] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const isMobile = useMedia()
  const [timer, setTimer] = useState(null)

  const nextSlide = () => {
    if (selectedIndex === data.length - 2) return
    swiper.slideTo(selectedIndex + 1)
  }

  const preSlide = () => {
    if (selectedIndex === 1) return
    swiper.slideTo(selectedIndex - 1)
  }

  useEffect(() => {
    if (!swiper?.destroyed && swiper && selectedIndex > 0) {
      clearInterval(timer)
      const interval = setInterval(() => {
        setSelectedIndex((prev) => {
          const boundaryCheck = isMobile ? data.length - 2 : data.length - 3
          const nextIndex = prev + 1
          if (nextIndex > boundaryCheck) {
            clearInterval(interval)
            return prev
          }
          return nextIndex
        })
      }, 5000)

      setTimer(interval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swiper, selectedIndex, isMobile])

  useEffect(() => {
    if (!swiper?.destroyed && swiper) {
      const maxIndex = isMobile ? data.length - 2 : data.length - 3
      const minIndex = isMobile ? 1 : 2

      const newIndex = Math.min(Math.max(selectedIndex, minIndex), maxIndex)
      setSelectedIndex(newIndex)
      swiper.slideTo(newIndex)
    }
  }, [selectedIndex, swiper, isMobile])

  useEffect(() => {
    setSelectedIndex(isMobile ? 1 : 2)
  }, [isMobile])

  return (
    <div className="w-full px-[16px] md:px-[20px] relative md:py-[80px] pb-[50px] bg-lightgray">
      <p className="font-radikal_medium text-[24px] text-center md:leading-auto leading-[250%]">
        Elevating Brands, One Package at a Time.
      </p>
      <Slider
        slideClassName="py-[32px] w-full"
        className="max-w-[100%] overflow-visible"
        sliderProps={{
          initialSlide: 1,
          slidesPerView: 3,
          spaceBetween: 20,
          centeredSlides: true,
          grabCursor: true,
          onSwiper: (swiperCtrl) => setSwiper(swiperCtrl),
          onSlideChange: (swiperCtrl) => {
            setSelectedIndex(swiperCtrl.realIndex)
          },
          breakpoints: {
            768: {
              slidesPerView: 5,
              initialSlide: 2,
            },
          },
        }}
      >
        {data.map((brand) => (
          <div
            className="h-[102px] bg-white px-[20px] flex items-center justify-center pointer-events-none"
            key={brand.image}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img width="auto" height="auto" src={brand.image} alt="brand" />
          </div>
        ))}
      </Slider>
      <div className="w-full flex justify-center gap-[30px] md:hidden">
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button
          type="button"
          onClick={preSlide}
          className="bg-[url('/images/arrow-long-back.svg')] w-[48px] h-[16px] hover:opacity-[0.8]"
        />
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button
          type="button"
          onClick={nextSlide}
          className="bg-[url('/images/arrow-long-back.svg')] rotate-[180deg] w-[48px] h-[16px] hover:opacity-[0.8]"
        />
      </div>
    </div>
  )
}

export default BrandSlides
