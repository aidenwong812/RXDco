import React from "react"
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"

interface ISlider {
  children: React.ReactNode[]
  sliderProps: SwiperProps
  className?: string
  slideClassName?: string
}

function Slider({ children, sliderProps, className, slideClassName }: ISlider) {
  return (
    <Swiper {...sliderProps} className={className}>
      {children.map((item, i) => (
        <SwiperSlide key={i} className={slideClassName ? slideClassName : ""}>
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
