import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react"
import { useMeasure } from "react-use"

export enum DIRECTION {
  POSITIVE = "POSITIVE",
  REVERSE = "REVERSE",
}

const WhyUsPageContext = createContext(undefined)

export const WhyUsPageProvider = ({ children }) => {
  const reasonRef = useRef()
  const [setReasonRef, { width }] = useMeasure()
  const [selectedColor, setSelectedColor] = useState("#D1D5D5")

  const [animationDirection, setAnimationDirection] = useState(DIRECTION.POSITIVE)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [animationEndedReason, setAnimationEndedReason] = useState(-1)
  const isPositiveDirection = animationDirection === DIRECTION.POSITIVE

  const reasonWidth = width / 4

  useEffect(() => {
    if (reasonRef?.current) setReasonRef(reasonRef.current)
  }, [reasonRef?.current])

  const value = useMemo(
    () => ({
      selectedIndex,
      setSelectedIndex,
      animationEndedReason,
      setAnimationEndedReason,
      animationDirection,
      setAnimationDirection,
      isPositiveDirection,
      reasonRef,
      reasonWidth,
      width,
      selectedColor,
      setSelectedColor,
    }),
    [
      selectedIndex,
      setSelectedIndex,
      animationEndedReason,
      setAnimationEndedReason,
      setAnimationDirection,
      animationDirection,
      isPositiveDirection,
      reasonRef,
      reasonWidth,
      width,
      selectedColor,
      setSelectedColor,
    ],
  )

  return <WhyUsPageContext.Provider value={value}>{children}</WhyUsPageContext.Provider>
}

export const useWhyUsPage = () => {
  const context = useContext(WhyUsPageContext)
  if (context === undefined) {
    throw new Error("useWhyUsPage must be used within an WhyUsPageProvider")
  }
  return context
}
