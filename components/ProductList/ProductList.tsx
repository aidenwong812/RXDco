import Link from "next/link"
import { useMemo } from "react"
import Media from "../../shared/Media"
import concentratesData from "../../utils/concentrates.json"
import flowandediblesData from "../../utils/flowandedibles.json"
import prerollData from "../../utils/preroll.json"
import { useCustomPackages } from "../../providers/CustomPackagesProvider"
import { CATEGORIES } from "../../utils/customPackages"
import vapeproductsData from "../../utils/vapeproducts.json"
import serviceData from "../../utils/services.json"

const ProductList = () => {
  const { selectedCategory } = useCustomPackages()

  const data = useMemo(() => {
    switch (selectedCategory) {
      case CATEGORIES.CONCENTRATES:
        return concentratesData
      case CATEGORIES.FLOWERANDEDIBLES:
        return flowandediblesData
      case CATEGORIES.PREROLL:
        return prerollData
      case CATEGORIES.VAPEPRODUCTS:
        return vapeproductsData
      case CATEGORIES.SERVICES:
        return serviceData
      default:
        return []
    }
  }, [selectedCategory])

  return (
    <div className="flex-wrap flex gap-[10px] justify-center lg:justify-start">
      {data?.map((item) => (
        <Link href={`/product/${item.id}`} key={item.id}>
          <div
            className="flex flex-col w-[140px] aspect-[1/1] items-center justify-center gap-y-[10px]
            border-[1px] border-lightgray rounded-[6px] p-[8px]"
          >
            <Media
              type="image"
              link={item.image}
              blurLink={item.image}
              containerClasses="w-[80px] aspect-[1/1] hover:scale-[1.1] transition duration-[200ms]"
            />
            <p className="font-radikal_light text-[12px] text-black">{item.name}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ProductList
