import { useState } from "react"
import Icon from "../../../shared/Icon"
import Modal from "../../../shared/Modal"
import { CATEGORIES } from "../../../utils/customPackages"
import { useProducts } from "../../../providers/ProductsProvider"

const FilterButton = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const { setSelectedCategory, selectedCategory } = useProducts()

  const handleClickCategory = (category) => {
    setSelectedCategory(category)
  }

  return (
    <>
      <button
        type="button"
        className="font-radikal_medium text-black border-[1px] border-black
                flex items-center gap-x-[10px] text-[14px] transition duration-[300ms]
                rounded-[0.5rem] bg-transparent hover:bg-black hover:text-white px-[24px] py-[10px]"
        onClick={() => setIsOpenModal(true)}
      >
        <Icon name="filter" raw color="#040404" size={14} />
        Filter
      </button>
      <Modal
        isVisible={isOpenModal}
        onClose={() => setIsOpenModal(!isOpenModal)}
        showCloseButton
        id="filter-modal"
      >
        <div
          className="flex flex-col gap-y-[20px] p-[32px] rounded-[0.8rem]
                bg-white overflow-hidden"
        >
          {Object.values(CATEGORIES)
            .filter((category) => category !== CATEGORIES.NOT_SELECTED)
            .map((category) => (
              <button
                className={`px-[20px] py-[10px] cursor-pointer rounded-[0.8rem] transition duration-[0.8rem]
                font-radikal_medium text-darkgray text-[16px] hover:bg-lightblue hover:text-blue 
                ${selectedCategory === category ? "!bg-lightblue !text-blue" : ""}`}
                type="button"
                onClick={() => handleClickCategory(category)}
                key={category}
              >
                {category}
              </button>
            ))}
        </div>
      </Modal>
    </>
  )
}

export default FilterButton
