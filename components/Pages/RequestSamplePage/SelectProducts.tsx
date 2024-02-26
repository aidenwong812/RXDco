import { useRequestSample } from "../../../providers/RequestSampleProvider"
import Media from "../../../shared/Media"
import data from "../../../utils/interest-products.json"

const SelectProducts = () => {
  const { handleSelectProduct, selectedProducts } = useRequestSample()

  return (
    <>
      <p
        className="py-[40px] md:py-[64px] text-[28px] text-lightblack font-radikal_light text-center
        leading-[120%]
        border-b border-b-[#d1d5db]"
      >
        Which products are you interested in?
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] py-[20px]">
        {data.map((product) => (
          <button
            key={product.id}
            type="button"
            className={`w-full flex flex-col items-center relative
                    border ${
                      selectedProducts.includes(product.id) ? "border-black" : "border-[#d1d5db]"
                    } rounded-[0.5rem] p-[16px] cursor-pointer`}
            onClick={() => handleSelectProduct(product.id)}
          >
            <div
              className={`absolute w-[24px] aspect-[1/1] border border-black rounded-[0.25rem] top-[10px] left-[10px] z-[4]
                    transition duration-[200ms]
                    ${selectedProducts.includes(product.id) ? "bg-green" : ""}`}
            />
            <Media
              type="image"
              link={product.middle_image}
              blurLink={product.middle_image}
              containerClasses="w-full aspect-[1/1]"
            />
            <p className="text-[16px] pt-[20px] font-radikal_light text-black text-[]">
              {product.name}
            </p>
          </button>
        ))}
      </div>
    </>
  )
}

export default SelectProducts
