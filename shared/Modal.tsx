import React, { ReactNode } from "react"
import Icon from "./Icon"
import { motion } from "framer-motion"

interface IModal {
  id?: string
  onClose: () => any
  showCloseButton?: boolean
  children: ReactNode
  isVisible: Boolean
  containerClassName?: string
  closeButtonClassName?: string
  modalClassName?: string
}

function Modal({
  id,
  onClose,
  showCloseButton,
  children,
  isVisible,
  modalClassName,
  containerClassName,
  closeButtonClassName,
}: IModal) {
  const handleClick = (e: any) => {
    if (onClose) onClose()
  }
  return (
    <motion.div
      className={`fixed top-0 left-0 w-screen h-screen z-[10000]
        flex justify-center items-center
        ${isVisible ? "visible" : "pointer-events-none"}
        ${modalClassName || ""}
      `}
    >
      <motion.div
        className="w-full h-full bg-[#040404bf]
      absolute left-0 top-0 z-[1]"
        animate={{
          opacity: isVisible ? 1 : 0,
        }}
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        onClick={handleClick}
      />
      <motion.div
        className={`relative z-[2] ${containerClassName || ""}`}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.5,
        }}
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        {showCloseButton && (
          <div
            className={`absolute cursor-pointer
              top-[5px] right-[-35px] hover:scale-[1.15] transition duration-[200ms]
              ${closeButtonClassName || ""}`}
            onClick={onClose}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2l18 18M2 20L20 2" stroke="#FFF" stroke-width="2" fill="none"></path>
            </svg>
          </div>
        )}
        {children}
      </motion.div>
    </motion.div>
  )
}

export default Modal
