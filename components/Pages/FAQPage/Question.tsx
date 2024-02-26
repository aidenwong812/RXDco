import { motion } from "framer-motion"
import { useState } from "react"

const Question = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className="border-b border-b-igray pt-[24px] md:pt-[28px] 
        pb-[21px] md:pb-[23px] w-full
        flex justify-center"
    >
      <div className="max-w-[603px] w-full px-[16px] md:px-0">
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="max-w-[355px] w-full text-left mr-[20px] leading-[1.4] cursor-pointer
                    text-[16px] md:text-[20px] transition duration-[200ms] tracking-[-0.4px] font-radikal_light
                    hover:text-red"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {data.title}
          </button>
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            animate={{
              rotate: isExpanded ? "180deg" : "0deg",
            }}
            initial={{
              rotate: isExpanded ? "0deg" : "180deg",
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <g stroke="currentColor" fill="none" fill-rule="evenodd">
                <circle fill="#fff" cx="16" cy="16" r="15.5" />{" "}
                <path
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 15l4 4 4-4"
                />
              </g>
            </svg>
          </motion.button>
        </div>
        <motion.div
          animate={{
            height: isExpanded ? "auto" : "0px",
          }}
          initial={{
            height: "0px",
          }}
          transition={{
            duration: 0.5,
          }}
          className="overflow-hidden h-fit"
        >
          <motion.p
            className="pt-[24px] md:pt-[32px] leading-[1.5]
                    font-radikal_light text-[16px]
                    text-darkgray"
            animate={{
              opacity: isExpanded ? 1 : 0,
            }}
            initial={{
              opacity: isExpanded ? 0 : 1,
            }}
            transition={{
              delay: isExpanded ? 0.5 : 0,
              duration: 0.5,
            }}
          >
            {data.answer}
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

export default Question
