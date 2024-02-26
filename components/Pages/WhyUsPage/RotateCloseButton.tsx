import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Icon from "../../../shared/Icon"

const RotateCloseButton = ({ onClick, reasonNo }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisibleButton, setIsVisibleButton] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsVisibleButton(true)
    }, 1500)
  }, [])

  return (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <div
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className="flex items-center"
    >
      {isVisibleButton ? (
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
          onClick={onClick}
        >
          <Icon name="close" size={30} color="white" raw />
        </motion.div>
      ) : (
        <p className="text-[16px] font-radikal_light text-white">0{reasonNo + 1}</p>
      )}
    </div>
  )
}

export default RotateCloseButton
