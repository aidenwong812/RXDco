import { motion } from "framer-motion"
import ReasonIcon from "../ReasonIcon"
import useReasonAccordion from "../../../../hooks/useReasonAccordion"
import Icon from "../../../../shared/Icon"

const Reason = ({ item, i }) => {
  const { handleClick, isExpanded } = useReasonAccordion({ i })

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className="w-full flex flex-col rounded-[8px] overflow-hidden" onClick={handleClick}>
      <div
        className="flex items-center gap-x-[20px]
      px-[32px] py-[28px] transition duration-[500ms] relative"
        style={{
          background: isExpanded ? item.color : "white",
        }}
      >
        <ReasonIcon item={item} />
        <p
          className={`max-w-[180px] text-[20px] font-radikal_light tracking-[-0.4px]
        transition duration-[500ms]
        ${isExpanded ? "text-white" : "text-black"}`}
        >
          {item.title}
        </p>
        <div className="absolute top-[16px] right-[16px] text-[16px] font-[300] font-radikal_light">
          {isExpanded ? <Icon name="close" color="white" raw /> : `0${i + 1}`}
        </div>
      </div>
      <motion.div
        className="py-0 px-[32px] bg-white"
        animate={{
          height: isExpanded ? "100%" : "0px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <motion.img
          src={item.image}
          className="w-full h-auto rounded-[8px] mb-[24px]"
          alt="not found reason"
          animate={{
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{
            opacity: {
              delay: isExpanded ? 0.5 : 0,
            },
          }}
        />
        <motion.p
          className="text-[16px] text-black font-radikal_light pb-[32px]"
          animate={{
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{
            opacity: {
              delay: isExpanded ? 0.5 : 0,
            },
          }}
        >
          {item.content}
        </motion.p>
      </motion.div>
    </div>
  )
}

export default Reason
