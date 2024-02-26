import { useMediaQuery } from "usehooks-ts"

const useMedia = (maxWidth = 768) => {
  const isMobile = useMediaQuery(`(max-width: ${maxWidth}px)`)

  return isMobile
}

export default useMedia
