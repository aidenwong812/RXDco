import modaldata from "../utils/inspiration-trending-modal.json"
import { useState } from "react"

const useInspirationModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(0)

  const nextProduct = () => {
    if (selectedProduct === modaldata.length - 1) {
      setSelectedProduct(0)
      return
    }

    setSelectedProduct(selectedProduct + 1)
  }

  const prevProduct = () => {
    if (selectedProduct === 0) {
      setSelectedProduct(modaldata.length - 1)
      return
    }

    setSelectedProduct(selectedProduct - 1)
  }

  const handleClick = (i) => {
    setSelectedProduct(i)
    setIsOpenModal(true)
  }

  return {
    nextProduct,
    prevProduct,
    isOpenModal,
    setIsOpenModal,
    handleClick,
    selectedProduct,
  }
}

export default useInspirationModal
