import { useMemo } from "react"
import { motion } from "framer-motion"
import { useCustomPackages } from "../../providers/CustomPackagesProvider"
import Icon from "../../shared/Icon"
import { CATEGORIES } from "../../utils/customPackages"

const BackMenuButton = () => {
  const { isVisiblePackages, setSelectedCategory, selectedCategory } = useCustomPackages()

  const label = useMemo(() => {
    if (isVisiblePackages) return "Custom Packaging"
    return ""
  }, [isVisiblePackages])

  const productName = useMemo(() => {
    switch (selectedCategory) {
      case CATEGORIES.CONCENTRATES:
        return "Concentrate"
      case CATEGORIES.FLOWERANDEDIBLES:
        return "Flow And Edibles"
      case CATEGORIES.PREROLL:
        return "Pre Roll"
      case CATEGORIES.VAPEPRODUCTS:
        return "Vape Products"
      case CATEGORIES.SERVICES:
        return "Services"
      default:
        return ""
    }
  }, [selectedCategory])

  const handleBack = () => {
    if (selectedCategory !== CATEGORIES.NOT_SELECTED) setSelectedCategory(CATEGORIES.NOT_SELECTED)
  }

  return (
    <motion.div
      className="w-full flex justify-between items-center left-0 top-0 z-[2] !bg-lightgray
      h-[55px] px-[16px] border-b border-b-lightgray text-[13px] samsungS8:text-[15px]"
    >
      <p>
        <button className="underline" type="button" onClick={handleBack}>
          {label}
        </button>
        <span> / </span>
        <span>{productName}</span>
      </p>
      <button
        type="button"
        className="flex items-center"
        onClick={() => setSelectedCategory(CATEGORIES.NOT_SELECTED)}
      >
        <Icon name="chevron-back" size={16} color="#040404" raw />
        <p>Back</p>
      </button>
    </motion.div>
  )
}

export default BackMenuButton
