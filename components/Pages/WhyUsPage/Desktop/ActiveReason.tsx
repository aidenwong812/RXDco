import { motion } from "framer-motion"
import useActiveReasonAnimation from "../../../../hooks/useActiveReasonAnimation"
import RotateCloseButton from "../RotateCloseButton"
import { useWhyUsPage } from "../../../../providers/WhyUsPageProvider"

const ActiveReason = ({ item, i }) => {
  const {
    isAnimationMode,
    isHovered,
    setIsHovered,
    handleClick,
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
  } = useActiveReasonAnimation({ i })

  const { setSelectedColor } = useWhyUsPage()

  const handleMouseOver = () => {
    setIsHovered(true)
    setSelectedColor(item.color)
  }

  const handleMouseOut = () => {
    setIsHovered(false)
    setSelectedColor("#D1D5D5")
  }

  return (
    <motion.div
      className={`${isPositiveDirection ? "!h-fit" : "!h-[421px]"} 
      rounded-[8px] relative overflow-hidden shadow-grayshadow
      flex flex-col justify-between 
      ${isPositiveDirection ? "cursor-pointer" : "cursor-[url('/images/crosshair.svg'),_pointer]"}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={() => (isAnimationMode ? () => {} : handleClick)}
      initial={containerInitial}
      animate={containerAnimation}
      transition={containerTransition}
    >
      <div className="w-full rounded-[8px] px-[18.5px] relative overflow-hidden shadow-grayshadow">
        <div
          className={`pb-[5px] px-[44px] flex justify-between left-0
        absolute w-full ${isAnimationMode ? "pt-[5px]" : "pt-[25px]"}`}
        >
          <div className="flex gap-x-[20px] items-center">
            <div
              className="w-[48px] aspect-[1/1] flex justify-center items-center rounded-full"
              style={{
                background: item.color,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.icon}
                alt="not found icon"
                width={item.icon_width}
                height={item.icon_height}
              />
            </div>
          </div>
          {isAnimationMode ? (
            <RotateCloseButton onClick={handleClick} reasonNo={i} />
          ) : (
            <p
              className={`text-[16px] font-radikal_light duration-[500ms] transition ${
                isHovered ? "text-white" : "text-black"
              }`}
            >
              0{i + 1}
            </p>
          )}
        </div>
        <motion.div
          className={`text-[20px] font-radikal_light px-[36px] pb-[19px] min-h-[60px]
          w-full left-0 top-0 flex items-end transition duration-[500ms] rounded-t-[8px]
          tracking-[-0.4px] ${isHovered || isAnimationMode ? "text-white" : "text-black"}
          `}
          style={{
            background: isHovered || isAnimationMode ? item.color : "white",
          }}
          initial={titleInitial}
          animate={titleAnimation}
          transition={titleTransition}
        >
          {item.title}
        </motion.div>
        <motion.div
          className="flex-grow flex justify-between overflow-hidden
          py-[40px] px-[48px] rounded-b-[8px] bg-white"
          initial={contentInitial}
          animate={contentAnimation}
          transition={contentTransition}
        >
          <div className="flex items-start max-w-[291px] w-full font-radikal_light pre-wrap">
            {item.content}
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.image} className="max-w-[340px]" alt="not found reason" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ActiveReason
