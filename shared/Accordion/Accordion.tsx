import { FC, ReactNode, useState } from "react"
import { motion } from "framer-motion"

interface AccordionProps {
  className?: string
  questionClassName?: string
  contentClassname?: string
  question: ReactNode
  content: ReactNode
  expandIcon: ReactNode
  hideIcon: ReactNode
  questionNumber?: number
}

const Accordion: FC<AccordionProps> = ({
  className,
  questionNumber,
  questionClassName,
  contentClassname,
  question,
  content,
  expandIcon,
  hideIcon,
}) => {
  const [isExpaned, setIsExpanded] = useState(false)

  return (
    <div
      className={`${className || ""} 
      transition duration-[300ms]`}
    >
      <button
        className={`
          w-full 
          flex justify-between items-center 
          ${questionClassName} ${!isExpaned ? "!border-none" : ""}`}
        type="button"
        onClick={() => setIsExpanded(!isExpaned)}
      >
        <div className="flex gap-x-[5px]">
          {questionNumber && <p>{questionNumber}.</p>}
          <p>{question}</p>
        </div>
        <div>{isExpaned ? hideIcon : expandIcon}</div>
      </button>
      <motion.div
        animate={{
          height: isExpaned ? "100%" : "0px",
        }}
      >
        <p className={`${contentClassname || ""}`}>{content}</p>
      </motion.div>
    </div>
  )
}

export default Accordion
