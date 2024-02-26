import { useMemo, useState } from "react"
import { useWhyUsPage } from "../providers/WhyUsPageProvider"
import { DIRECTION } from "../providers/WhyUsPageProvider"

const useActiveReasonAnimation = ({ i }) => {
  const [isHovered, setIsHovered] = useState(false)
  const {
    setSelectedIndex,
    selectedIndex,
    setAnimationEndedReason,
    setAnimationDirection,
    isPositiveDirection,
    reasonWidth,
    width,
  } = useWhyUsPage()

  const isAnimationMode = selectedIndex >= 0

  const titleAnimation = useMemo(
    () => ({
      height: isPositiveDirection ? 60 : 421,
      paddingLeft: isPositiveDirection ? 92 : 24,
      paddingRight: isPositiveDirection ? 92 : 24,
    }),
    [isPositiveDirection],
  )

  const titleTransition = useMemo(
    () => ({
      height: { delay: isPositiveDirection ? 1 : 0, duration: 0.5 },
      paddingLeft: { delay: isPositiveDirection ? 0.75 : 0.5, duration: 0.25 },
      paddingRight: { delay: isPositiveDirection ? 0.75 : 0.5, duration: 0.25 },
    }),
    [isPositiveDirection],
  )

  const titleInitial = useMemo(
    () => ({
      height: isPositiveDirection ? 421 : 60,
      paddingLeft: isPositiveDirection ? 24 : 92,
      paddingRight: isPositiveDirection ? 24 : 92,
    }),
    [isPositiveDirection],
  )

  const containerAnimation: any = useMemo(
    () => ({
      width: isPositiveDirection ? `${width}px` : `${reasonWidth}px`,
    }),
    [isPositiveDirection, reasonWidth, width],
  )

  const containerInitial = useMemo(
    () => ({
      width: isPositiveDirection ? `${reasonWidth}px` : `${width}px`,
    }),
    [isPositiveDirection, reasonWidth, width],
  )

  const containerTransition = useMemo(
    () => ({
      width: { delay: 0.5, duration: 0.5 },
    }),
    [isPositiveDirection],
  )

  const contentInitial = useMemo(
    () => ({
      display: isPositiveDirection ? "none" : "flex",
      height: isPositiveDirection ? 0 : "100%",
      opacity: isPositiveDirection ? 0 : 1,
    }),
    [isPositiveDirection],
  )

  const contentAnimation = useMemo(
    () => ({
      display: isPositiveDirection ? "flex" : "none",
      height: isPositiveDirection ? "100%" : 0,
      opacity: isPositiveDirection ? 1 : 0,
    }),
    [isPositiveDirection],
  )

  const contentTransition = useMemo(
    () => ({
      display: { delay: isPositiveDirection ? 1.2 : 0.2, duration: 0 },
      height: { delay: isPositiveDirection ? 1.2 : 0, duration: 0.5 },
      opacity: { duration: 0.25 },
    }),
    [isPositiveDirection],
  )

  const handleClick = () => {
    setAnimationDirection(DIRECTION.REVERSE)
    setTimeout(() => {
      setAnimationEndedReason(i)
      setAnimationDirection(DIRECTION.POSITIVE)
      setSelectedIndex(-1)
    }, 1000)
  }

  return {
    isAnimationMode,
    handleClick,
    isHovered,
    setIsHovered,
    titleAnimation,
    titleTransition,
    titleInitial,
    containerAnimation,
    containerInitial,
    containerTransition,
    contentAnimation,
    contentInitial,
    contentTransition,
    isPositiveDirection,
  }
}

export default useActiveReasonAnimation
