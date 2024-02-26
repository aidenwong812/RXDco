import { useState } from "react"

const useReasonAccordion = ({ i }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  return {
    isExpanded,
    handleClick,
  }
}

export default useReasonAccordion
