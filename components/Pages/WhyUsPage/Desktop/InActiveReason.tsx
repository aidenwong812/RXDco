import { motion } from "framer-motion"
import useInActiveReasonAnimation from "../../../../hooks/useInActiveReasonAnimation"
import { useWhyUsPage } from "../../../../providers/WhyUsPageProvider"

const InActiveReason = ({ item, i }) => {
  const {
    handleClick,
    isHovered,
    setIsHovered,
    containerAnimation,
    containerInitial,
    containerTransition,
  } = useInActiveReasonAnimation({ i })

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
      className={`h-[421px] w-[25%] 
      flex flex-col justify-between cursor-[url('/images/crosshair.svg'),_pointer]`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
      initial={containerInitial}
      animate={containerAnimation}
      transition={containerTransition}
    >
      <div className="w-full rounded-[8px] relative overflow-hidden shadow-grayshadow px-[18.5px]">
        <div
          className="pb-[5px] px-[44px] flex justify-between
      absolute w-full pt-[32px] left-0"
        >
          <div className="flex gap-x-[20px] items-center">
            <div
              className="w-[48px] h-[48px] flex justify-center items-center rounded-full p-[10px]"
              style={{
                background: item.color,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.icon} alt="not found icon" />
            </div>
          </div>
          <p
            className={`text-[16px] font-radikal_light duration-[500ms] transition ${
              isHovered ? "text-white" : "text-black"
            }`}
          >
            0{i + 1}
          </p>
        </div>
        <div
          className={`text-[20px] font-radikal_light px-[24px] pb-[19px] min-h-[60px]
        w-full h-[421px] left-0 top-0 flex items-end transition duration-[500ms] rounded-[8px]
        tracking-[-0.4px] ${isHovered ? "text-white" : "text-black"}
        `}
          style={{
            background: isHovered ? item.color : "white",
          }}
        >
          {item.title}
        </div>
      </div>
    </motion.div>
  )
}

export default InActiveReason
