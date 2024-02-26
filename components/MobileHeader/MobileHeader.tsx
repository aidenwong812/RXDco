import { useState } from "react"
import { motion } from "framer-motion"
import Media from "../../shared/Media"
import MobileMenu from "../MobileMenu"
import useIsLighMode from "../../hooks/useIsLightMode"
import { useTheme } from "../../providers/ThemeProvider"

const MobileHeader = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)
  const isLightMode = useIsLighMode()
  const { isStickyMode } = useTheme()

  return (
    <>
      <div
        className={`relative z-[-1] flex w-full justify-between items-center h-[80px] transition duration-[300ms]
        ${isStickyMode ? "bg-white" : "bg-transparent"} cursor-pointer px-[16px]`}
      >
        <Media
          type="image"
          link={isLightMode ? "/images/white_logo.svg" : "/images/logo.svg"}
          blurLink={isLightMode ? "/images/white_logo.png" : "/images/logo.png"}
          containerClasses="w-[150px] h-[32px]"
        />
        <button
          type="button"
          onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
          className="w-[44px] flex flex-col gap-y-[6px] mx-[6px]"
        >
          <motion.div
            className={`${isLightMode ? "bg-white" : "bg-black"} h-[2px] w-full`}
            animate={{
              transform: isOpenMobileMenu ? "rotate(45deg) translateY(5.5px)" : "rotate(0deg)",
            }}
            initial={{
              transform: "rotate(0deg)",
            }}
          />
          {!isOpenMobileMenu && (
            <motion.div className={`${isLightMode ? "bg-white" : "bg-black"} h-[2px] w-full`} />
          )}
          <motion.div
            className={`${isLightMode ? "bg-white" : "bg-black"} h-[2px] w-full`}
            animate={{
              transform: isOpenMobileMenu ? "rotate(-45deg) translateY(-5.5px)" : "rotate(0deg)",
            }}
            initial={{
              transform: "rotate(0deg)",
            }}
          />
        </button>
      </div>
      {isOpenMobileMenu && <MobileMenu />}
    </>
  )
}
export default MobileHeader
