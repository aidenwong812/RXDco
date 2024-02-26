import { createContext, useContext, useMemo, useState } from "react"

const MultipleSlidesContext = createContext(undefined)

export const MultipleSlidesProvider = ({ children }) => {
  const [swipers, setSwipers] = useState([])

  const setSwiperCtrl = (swiperCtrl, index) => {
    swipers[index] = swiperCtrl
    setSwipers(swipers)
  }

  const nextSlides = () => {
    for (let swiper of swipers) {
      swiper.slideNext()
    }
  }

  const value = useMemo(
    () => ({
      swipers,
      setSwiperCtrl,
      nextSlides,
    }),
    [swipers, setSwiperCtrl, nextSlides],
  )

  return <MultipleSlidesContext.Provider value={value}>{children}</MultipleSlidesContext.Provider>
}

export const useMultipleSlides = () => {
  const context = useContext(MultipleSlidesContext)
  if (context === undefined) {
    throw new Error("useMultipleSlides must be used within an MultipleSliderProvider")
  }
  return context
}
