import Link from "next/link"
import { useCustomPackages } from "../../providers/CustomPackagesProvider"
import Media from "../../shared/Media"

const SingleProduct = () => {
  const { selectedProduct } = useCustomPackages()

  return (
    <Link href={`/product/${selectedProduct?.id}`}>
      <div
        className="w-full h-full flex flex-col items-center justify-center
      gap-y-[20px]"
      >
        <Media
          type="image"
          link={selectedProduct?.middle_image}
          blurLink={selectedProduct?.middle_image}
          containerClasses="w-[225px] aspect-[1/1]"
        />
        <p className="text-[20px]">{selectedProduct?.name}</p>
        <p className="text-darkgray text-center text-[13px] samsungS8:text-[15px] max-w-[400px]">
          {selectedProduct?.description}
        </p>
        {selectedProduct && (
          <button
            type="button"
            className="border-[1px] border-blue bg-blue w-[140px] h-[42px] text-[16px] font-radikal text-white rounded-[8px]
        hover:bg-white hover:text-black transition duration-[300ms]"
          >
            Get Started
          </button>
        )}
      </div>
    </Link>
  )
}

export default SingleProduct
