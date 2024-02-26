/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import Link from "next/link"
import { useCustomPackages } from "../../providers/CustomPackagesProvider"
import { CATEGORIES } from "../../utils/customPackages"
import ProductList from "../ProductList"
import SingleProduct from "../SingleProduct"

const PackagesMenu = () => {
  const { selectedCategory, setSelectedCategory, favoriteProducts, setSelectedProductID } =
    useCustomPackages()

  const itemClassName = `py-[8px] px-[16px] hover:bg-[rgba(16,1,106,.16)] transition duration-[200ms]
    hover:text-[#10016a] hover:font-radikal rounded-[8px] w-fit !capitalize`
  const activeClassName = `py-[8px] px-[16px] bg-[rgba(16,1,106,.16)] text-[#10016a] font-radikal transition duration-[200ms] !capitalize
    rounded-[8px] w-fit`
  const headingClassName = `py-[8px] px-[16px] font-radikal_medium`
  return (
    <div
      className="flex cursor-pointer rounded-[.5rem] overflow-hidden
      shadow-[0_20px_40px_0_rgba(54,54,54,.09)]"
    >
      <div className="w-[230px] font-radikal_light flex flex-col gap-y-[8px] text-[16px] bg-lightgray pl-[40px] py-[24px]">
        <p className={headingClassName}>Shop by category</p>
        {Object.entries(CATEGORIES).map(([id, category]) => (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <>
            {category !== CATEGORIES.NOT_SELECTED && category !== CATEGORIES.ALL && (
              <p
                className={selectedCategory === category ? activeClassName : itemClassName}
                onMouseOver={() => setSelectedCategory(category)}
                key={id}
              >
                {category}
              </p>
            )}
          </>
        ))}
        <p className={headingClassName}>Shop by products</p>
        {favoriteProducts.map((product) => (
          <p
            className={itemClassName}
            onMouseOver={() => {
              setSelectedCategory(CATEGORIES.NOT_SELECTED)
              setSelectedProductID(product.id)
            }}
            key={product.id}
          >
            {product.name}
          </p>
        ))}
        <Link href="/products">
          <p className={itemClassName}>View All</p>
        </Link>
      </div>
      <div className="w-[480px] 2xl:w-[620px] px-[10px] py-[24px] bg-white">
        {selectedCategory === CATEGORIES.NOT_SELECTED ? <SingleProduct /> : <ProductList />}
      </div>
    </div>
  )
}

export default PackagesMenu
