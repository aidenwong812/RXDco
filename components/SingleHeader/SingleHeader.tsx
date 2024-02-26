import Link from "next/link"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import { useState } from "react"
import Media from "../../shared/Media"
import Icon from "../../shared/Icon"

const SingleHeader = () => {
  const { pathname } = useRouter()

  const isColoredLogo = pathname.includes("/request-a-sample")
  const [isHovered, setIsHoverd] = useState(false)

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1024px] flex justify-between items-end">
        <Link href="/">
          <div>
            <Media
              type="image"
              link={isColoredLogo ? "/images/color_white_logo.svg" : "/images/white_logo.svg"}
              blurLink={isColoredLogo ? "/images/color_white_logo.png" : "/images/white_logo.png"}
              containerClasses="w-[150px] h-[32px]"
            />
          </div>
        </Link>
        <Link href="/">
          {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
          <div
            className="flex items-center gap-x-[10px] cursor-pointer"
            onMouseOver={() => setIsHoverd(true)}
            onTouchStart={() => setIsHoverd(true)}
            onTouchEnd={() => setIsHoverd(false)}
            onMouseOut={() => setIsHoverd(false)}
          >
            <p className="font-radikal_light text-white text-[16px]">Close</p>
            <motion.div
              animate={{
                rotate: isHovered ? "90deg" : "0deg",
              }}
              initial={{
                rotate: "0deg",
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <Icon name="close" size={20} color="white" raw />
            </motion.div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default SingleHeader
