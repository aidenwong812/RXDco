import { useRef } from "react"

const useScrollTryItOn = () => {
  const inspiredRef = useRef() as any
  const testRef = useRef() as any

  const scrollToInspired = () => {
    if (typeof window === undefined) return
    window.scroll({
      behavior: "smooth",
      top: inspiredRef.current.offsetTop,
    })
  }

  const scrollToTestlabel = () => {
    if (typeof window === undefined) return
    window.scroll({
      behavior: "smooth",
      top: testRef.current.offsetTop,
    })
  }

  return {
    inspiredRef,
    testRef,
    scrollToInspired,
    scrollToTestlabel,
  }
}

export default useScrollTryItOn
