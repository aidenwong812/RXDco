import Link from "next/link"
import { useProducts } from "../../../providers/ProductsProvider"
import Media from "../../../shared/Media"
import { CATEGORIES } from "../../../utils/customPackages"
import useMedia from "../../../hooks/useMedia"
import FilterButton from "./FilterButton"

const ProductList = () => {
  const { productsList, setSelectedCategory, selectedCategory } = useProducts()
  const isVisbleFilterButton = useMedia(960)

  return (
    <div className="w-full pt-[120px] md:px-[20px] xl:px-[70px] relative bg-lightgray">
      <div className="grid px-[20px] grid-cols-2 sm:grid-cols-3 3md:grid-cols-4 gap-x-[10px] md:gap-x-[16px] gap-y-[48px] pt-[32px]">
        <div className="col-span-2 sm:col-span-3 3md:col-span-4 flex justify-between items-center md:items-start px-[5px] md:px-[20px]">
          <p className="text-[16px] text-black font-radikal_light">
            {productsList.length} products
          </p>
          {isVisbleFilterButton ? (
            <FilterButton />
          ) : (
            <div className="flex gap-x-[16px]">
              {Object.values(CATEGORIES)
                .filter((category) => category !== CATEGORIES.NOT_SELECTED)
                .map((category) => (
                  <button
                    className={`px-[20px] py-[10px] cursor-pointer rounded-[0.8rem] transition duration-[0.8rem]
                    font-radikal_medium text-darkgray text-[16px] hover:bg-lightblue hover:text-blue
                    ${selectedCategory === category ? "!bg-lightblue !text-blue" : ""}`}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    key={category}
                  >
                    {category}
                  </button>
                ))}
            </div>
          )}
        </div>
        {productsList.map((product) => (
          <div className="cursor-pointer flex flex-col 3md:px-[16px]" key={product.id}>
            <Link href={`/product/${product.id}`}>
              <div
                className="py-[10px] px-[10px] hover:scale-[1.1] transition duration-[300ms] w-full relative bg-white
              md:h-auto h-[290px] flex flex-col rounded-[0.5rem]"
              >
                {(product?.is_best_seller || product?.is_new || product.is_featured) && (
                  <div
                    className="relative md:absolute px-[5px] md:px-[15px] py-[5px] md:py-[8px] md:top-[20px] md:left-[20px] uppercase
                               bg-red rounded-[0.2rem] text-white font-radikal_light w-fit
                               text-[10px] md:text-[12px] leading-[100%] tracking-[1px] z-[2]"
                  >
                    {product?.is_best_seller && "Best Seller"}
                    {product?.is_new && "New"}
                    {product?.is_featured && "Featured"}
                  </div>
                )}
                <div className="flex-grow flex items-center md:mt-[30px]">
                  <Media
                    type="image"
                    link={product.middle_image}
                    blurLink={product.middle_image}
                    containerClasses="w-full aspect-[1/1] rounded-[0.8rem] overflow-hidden
                                      cursor-[url('/images/crosshair.svg'),_POINTER]"
                  />
                </div>
              </div>
            </Link>
            {product.name !== "Custom Labels" && (
              <p
                className="text-[16px] border-b-[2px] border-b-brown font-radikal_light 
                                    w-fit pt-[32px] md:text-left text-center self-center md:self-start"
              >
                {product.name}
              </p>
            )}
            <p
              className="text-[14px] text-black mt-[16px] font-radikal_light pb-[24px] max-w-[242px] md:max-w-auto self-center md:self-start
                        text-center md:text-left"
            >
              {product.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
