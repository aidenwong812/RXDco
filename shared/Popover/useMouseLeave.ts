import { useEffect, useRef } from "react"

interface IClickOutsideHook {
  shouldVisible: boolean
  onMouseLeave: () => any
}

function useMouseLeave({ shouldVisible, onMouseLeave }: IClickOutsideHook) {
  const ref = useRef<HTMLDivElement | any | null>(null)

  const handleMouseLeave = async (e: MouseEvent) => {
    const node = e.target as Node
    if (ref?.current?.contains(node)) return

    await onMouseLeave()
  }

  useEffect(() => {
    if (!shouldVisible) {
      document.removeEventListener("mousemove", handleMouseLeave)
      return
    }

    document.addEventListener("mousemove", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", handleMouseLeave)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldVisible])

  return { ref }
}

export default useMouseLeave
