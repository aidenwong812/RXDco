/* eslint-disable */
import { useState } from "react"
import useMouseLeave from "./useMouseLeave"

interface PopoverProps {
  id: string
  children?: any
  className?: string
  containerClassName?: string
  open?: boolean
}

export default function Popover({ id, children, containerClassName = "" }: PopoverProps) {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const openModal = () => {
    setIsOpenModal(true)
  }

  const { ref: modalRef } = useMouseLeave({
    shouldVisible: isOpenModal,
    onMouseLeave: () => setIsOpenModal(false),
  })

  return (
    <div className="relative" ref={modalRef}>
      <div onMouseOver={openModal} className="cursor-pointer">
        {children && typeof children[0] !== "function" && children[0]}
      </div>
      {isOpenModal && (
        <div
          className={`absolute z-10 ${containerClassName} pt-[50px]`}
          id={id}
          onMouseOver={openModal}
        >
          {children[1]}
        </div>
      )}
    </div>
  )
}
