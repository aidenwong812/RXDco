import Link from "next/link"
import DesktopMenu from "../DesktopMenu"
import { useTheme } from "../../providers/ThemeProvider"
import useIsLighMode from "../../hooks/useIsLightMode"

const DesktopHeader = () => {
  const { isStickyMode, handleStickyMode } = useTheme()
  const isLightMode = useIsLighMode()

  return (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <div
      className={`px-[2rem] w-full mx-[3rem] 2xl:w-[1344px]
      flex justify-between items-center rounded-[1rem] cursor-pointer
      ${isStickyMode ? "bg-white shadow-[0_0_1rem_rgba(0,0,0,.1)]" : ""}
      transition duration-[300ms] hover:bg-white hover:shadow-[0_0_1rem_rgba(0,0,0,.1)]
      hover:!text-[red] h-[80px]`}
      onMouseOver={() => handleStickyMode(true)}
      onMouseOut={() => handleStickyMode(false)}
    >
      <Link href="/">
        <div className="pl-[16px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={isLightMode ? "/images/white_logo.svg" : "/images/logo.svg"}
            width={150}
            height={32}
            alt="not found logo"
          />
        </div>
      </Link>
      <DesktopMenu />
    </div>
  )
}

export default DesktopHeader
