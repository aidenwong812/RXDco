import { useRouter } from "next/router"
import { useTheme } from "../providers/ThemeProvider"

const useIsLighMode = () => {
  const router = useRouter()
  const { isStickyMode } = useTheme()

  const pathname = router.pathname
  const id = router.query.id

  const isLightMode = pathname.includes("/product/") && id && !isStickyMode

  return isLightMode
}

export default useIsLighMode
