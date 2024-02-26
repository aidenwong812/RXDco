/* eslint-disable jsx-a11y/control-has-associated-label */
import { useEffect, useState } from "react"
import Link from "next/link"
import Slider from "../../shared/Slider"
import data from "../../utils/upcanabis.json"
import VideoSlide from "../Pages/LandingPage/VideoSlide"
import useMedia from "../../hooks/useMedia"

const UpCannabisSlides = () => {
  const [swiper, setSwiper] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(1)

  const isMobile = useMedia()

  useEffect(() => {
    if (isMobile) setSelectedIndex(0)
    else setSelectedIndex(1)
  }, [isMobile])

  const nextSlide = () => {
    if (selectedIndex === data.length - 2 && !isMobile) return
    if (selectedIndex === data.length - 1 && isMobile) return
    swiper.slideTo(selectedIndex + 1)
  }

  const preSlide = () => {
    if (selectedIndex === 1 && !isMobile) return
    if (selectedIndex === 0 && isMobile) return
    swiper.slideTo(selectedIndex - 1)
  }

  return (
    <>
      <div
        className="w-full flex gap-x-[32px] justify-between md:justify-end px-[16px]
      translate-y-[150px] md:translate-y-[0px] relative z-[10] mb-[0.5rem]"
      >
        <button
          type="button"
          onClick={preSlide}
          className="bg-[url('/images/arrow-long-back.svg')] w-[48px] h-[16px] hover:opacity-[0.8]"
        />
        <button
          type="button"
          onClick={nextSlide}
          className="bg-[url('/images/arrow-long-back.svg')] rotate-[180deg] w-[48px] h-[16px] hover:opacity-[0.8]"
        />
      </div>
      <div className="pl-[6px] pr-[16px]">
        <Slider
          className="!overflow-visible"
          slideClassName="pt-[32px]"
          sliderProps={{
            initialSlide: 0,
            slidesPerView: 1,
            spaceBetween: 23,
            centeredSlides: true,
            grabCursor: true,
            simulateTouch: false,
            onSwiper: (swiperCtrl) => setSwiper(swiperCtrl),
            onSlideChange: (swiperCtrl) => setSelectedIndex(swiperCtrl.realIndex),
            breakpoints: {
              770: {
                initialSlide: 1,
                slidesPerView: 3,
              },
              440: {
                slidesPerView: 2,
                initialSlide: 1,
              },
            },
          }}
        >
          {data.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div className="cursor-pointer flex flex-col translate-x-[10px] pr-[10px]">
                <VideoSlide videoUrl={product.video} imageUrl={product.image} />
                <p
                  className="text-[16px] border-b-[2px] border-b-brown font-radikal_light 
                            w-fit mb-[16px] pt-[31px] md:text-left text-center self-center md:self-start"
                >
                  {product.name}
                </p>
                <p
                  className="text-[14px] text-black font-radikal_light pb-[24px] max-w-[242px] md:max-w-auto 
                  self-center md:self-start leading-[1.125rem]
                  text-center md:text-left"
                >
                  {product.description}
                </p>
                <button
                  type="button"
                  className="border-[1px] border-black hover:bg-black hover:text-white 
                  text-black bg-none px-[30px] pt-[10px] pb-[9px] text-[14px]
                  transition duration-[300ms] rounded-[0.5rem] 
                  font-radikal_medium w-fit self-center md:self-start"
                >
                  Learn more
                </button>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default UpCannabisSlides
