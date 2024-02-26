import { useState } from "react"
import Slider from "../../../shared/Slider"
import data from "../../../utils/ourworks.json"
import Media from "../../../shared/Media"

const Ourwork = () => {
  const [swiper, setSwiper] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const nextSlide = () => {
    if (selectedIndex === data.length - 2) return
    swiper.slideNext()
  }

  const preSlide = () => {
    if (selectedIndex === 0) return
    swiper.slidePrev()
  }

  return (
    <div
      className="w-full bg-secondarygray
                pt-[130px] md:pt-[150px] gap-x-[50px]
                px-[18px] xl:px-[100px] relative z-[4]"
    >
      <Media
        type="image"
        link="/images/branding_hero_oval.svg"
        blurLink="/images/branding_hero_oval.svg"
        containerClasses="!absolute md:left-[40px] md:bottom-[-90px]
          left-[-30px] bottom-[-65px] !pointer-events-none
          w-[195px] aspect-[195/196] opacity-[0.35]"
      />
      <div
        className="w-[35px] aspect-[1/1] bg-green rounded-full absolute 
      md:bottom-[-80px] md:left-[190px] left-[30px] bottom-[-75px]"
      />
      <div className="w-full flex justify-between items-center">
        <p className="font-radikal_light text-[40px] tracking-[-0.8px]">Our Work</p>
        <div className="flex gap-x-[32px]">
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
          <div
            onClick={preSlide}
            className="bg-[url('/images/arrow-long-back.svg')] 
            w-[28px] md:w-[48px] h-[16px] hover:opacity-[0.8]"
          />
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
          <div
            onClick={nextSlide}
            className="bg-[url('/images/arrow-long-back.svg')] rotate-[180deg] 
            w-[28px] md:w-[48px] h-[16px] hover:opacity-[0.8]"
          />
        </div>
      </div>
      <div className="md:pl-[15px]">
        <Slider
          slideClassName="pt-[26px]"
          sliderProps={{
            initialSlide: 0,
            slidesPerView: 2,
            spaceBetween: 15,
            grabCursor: true,
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
          {data.map((item, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className="cursor-pointer flex flex-col" key={i}>
              <Media
                type="image"
                containerClasses="w-full aspect-[165.5/240] 
                md:w-[381px] md:aspect-[381/500] rounded-[0.5rem] overflow-hidden"
                imageClasses="!object-cover"
                link={item}
                blurLink={item}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Ourwork
