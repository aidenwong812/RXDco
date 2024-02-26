import Link from "next/link"
import { useRouter } from "next/router"
import { useProducts } from "../../providers/ProductsProvider"
import Media from "../../shared/Media"

const ProductsTrending = () => {
  const { products } = useProducts()
  const router = useRouter()

  return (
    <>
      <div className="flex-wrap flex gap-[5px] justify-center lg:justify-start">
        {products?.slice(0, 6).map((item) => (
          <Link href={`/product/${item.id}`} key={item.id}>
            <div
              className="flex flex-col w-[140px] aspect-[1/1] items-center justify-center gap-y-[10px]
                            border-[1px] border-gray rounded-[6px] p-[8px]"
            >
              <Media
                type="image"
                link={item.middle_image}
                blurLink={item.middle_image}
                containerClasses="w-[80px] aspect-[1/1] hover:scale-[1.1] transition duration-[200ms]"
              />
              <p className="font-radikal_light text-[12px] text-black">{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center py-[20px]">
        <button
          type="button"
          className="font-radikal_light text-black text-[16px] p-[10px]"
          onClick={() => router.push("/products")}
        >
          View All
        </button>
      </div>
    </>
  )
}

export default ProductsTrending
