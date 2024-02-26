import Link from "next/link"
import Media from "../../shared/Media"

const ProductItem = ({ data }) => (
  <div className="flex items-center w-full justify-around">
    <Link href={`/product/${data.id}`}>
      <div className="z-[10] flex flex-col items-center justify-center gap-y-[10px]">
        <Media
          type="image"
          link={data.middle_image}
          blurLink={data.middle_image}
          containerClasses="w-[200px] aspect-[1/1] hover:scale-[1.1] transition duration-[300ms]"
        />
        <p className="text-black font-radkical_light text-[16px]">{data.name}</p>
      </div>
    </Link>
    <div className="w-[2px] h-[120px] bg-gray" />
  </div>
)

export default ProductItem
