import { useRouter } from "next/router"
import Link from "next/link"
import { useCustomPackages } from "../../providers/CustomPackagesProvider"
import { CATEGORIES } from "../../utils/customPackages"

const PackagesMenu = () => {
  const { setSelectedCategory, favoriteProducts } = useCustomPackages()
  const router = useRouter()

  const itemClassName = `py-[15px] px-[16px] hover:bg-brown hover:text-white transition duration-[200ms] text-left`
  const headingClassName = `py-[15px] font-radikal_medium`

  return (
    <div className="flex flex-col gap-y-[8px] text-[16px]">
      <p className={headingClassName}>Shop by category</p>
      {Object.entries(CATEGORIES).map(([id, category]) => (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
          {category !== CATEGORIES.NOT_SELECTED && category !== CATEGORIES.ALL && (
            <button
              className={itemClassName}
              type="button"
              onClick={() => setSelectedCategory(category)}
              key={id}
            >
              {category}
            </button>
          )}
        </>
      ))}
      <p className={headingClassName}>Shop by products</p>
      {favoriteProducts.map((product) => (
        <button
          type="button"
          className={itemClassName}
          onClick={() => router.push(`/product/${product.id}`)}
          key={product.id}
        >
          <p>{product.name}</p>
        </button>
      ))}
      <Link href="/products">
        <p className={itemClassName}>View All</p>
      </Link>
    </div>
  )
}

export default PackagesMenu
