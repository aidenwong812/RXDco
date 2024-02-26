import { useEffect, useRef, useState } from "react"
import { ASIDE } from "../utils/blog-aisde"

const useBlogAside = () => {
  const containerRef = useRef<any>()

  const [asideMode, setAsideMode] = useState(ASIDE.RELAITVE)

  const handleScroll = () => {
    if (containerRef.current) {
      const { top, bottom } = containerRef.current.getBoundingClientRect()
      if (top > 75) {
        setAsideMode(ASIDE.RELAITVE)
      }
      if (top < 75) {
        setAsideMode(ASIDE.FIXED)
      }

      if (bottom < 370) {
        setAsideMode(ASIDE.ABSOLUTE)
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return {
    asideMode,
    containerRef,
  }
}

export default useBlogAside
