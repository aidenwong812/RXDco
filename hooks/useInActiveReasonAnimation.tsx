import { useMemo, useState } from "react"
import { useWhyUsPage } from "../providers/WhyUsPageProvider"

const useInActiveReasonAnimation = ({ i }) => {
  const {
    setSelectedIndex,
    selectedIndex,
    isPositiveDirection,
    animationEndedReason,
    setAnimationEndedReason,
    reasonWidth: width,
  } = useWhyUsPage()
  const [isHovered, setIsHovered] = useState(false)
  const isAnimationMode = selectedIndex >= 0
  const isEndedAnimation = animationEndedReason === i

  const reasonWidth = width > 0 ? width : "auto"

  const containerInitial = useMemo(
    () => ({
      width: isAnimationMode
        ? isPositiveDirection
          ? `${reasonWidth}px`
          : "0px"
        : `${reasonWidth}px`,
      opacity: isAnimationMode || isEndedAnimation ? 1 : 0,
    }),
    [isPositiveDirection, isAnimationMode, reasonWidth],
  )

  const containerAnimation = useMemo(
    () => ({
      width: isAnimationMode
        ? isPositiveDirection
          ? "0px"
          : `${reasonWidth}px`
        : `${reasonWidth}px`,
      opacity: isAnimationMode && !isEndedAnimation ? 0 : 1,
    }),
    [isPositiveDirection, isAnimationMode, reasonWidth],
  )

  const containerTransition = useMemo(
    () => ({
      width: { delay: 0.5, duration: 0.5 },
      opacity: { delay: 0, duration: 0.25 },
    }),
    [isPositiveDirection],
  )

  const handleClick = () => {
    setAnimationEndedReason(-1)
    setSelectedIndex(i)
  }

  return {
    handleClick,
    isHovered,
    setIsHovered,
    containerInitial,
    containerAnimation,
    containerTransition,
  }
}

export default useInActiveReasonAnimation
