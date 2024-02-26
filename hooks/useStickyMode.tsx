import { useEffect, useState } from "react"
import { useViewportScroll } from "framer-motion"

const useStickyMode = () => {
  const { scrollY } = useViewportScroll()
  const [isStickyMode, setIsStickyMode] = useState(false)
  const [shouldBeSticky, setShouldBeSticky] = useState(false)

  const handleStickyMode = (mode) => {
    if (shouldBeSticky) return
    setIsStickyMode(mode)
  }

  useEffect(() => {
    scrollY.onChange((y) => {
      if (y > 10) {
        setShouldBeSticky(true)
        setIsStickyMode(true)
        return
      }

      setShouldBeSticky(false)
      setIsStickyMode(false)
    })

    return () => {
      scrollY.clearListeners()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    isStickyMode,
    handleStickyMode,
  }
}

export default useStickyMode
