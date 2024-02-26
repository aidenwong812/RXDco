import { useRequestQuote } from "../../../providers/RequestQuoteProvider"
import Media from "../../../shared/Media"
import data from "../../../utils/interest-products.json"

const SelectProducts = () => {
  const { handleSelectProduct, selectedProducts } = useRequestQuote()

  return (
    <>
      <p
        className="py-[40px] md:pt-[72px] text-[28px] text-lightblack font-radikal_light text-center
        leading-[120%] tracking-[-1px] md:tracking-auto"
      >
        Which products are you interested in? Choose 1 or more:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] py-[20px]">
        {data.map((product) => (
          <button
            key={product.id}
            type="button"
            className={`w-full flex flex-col items-center relative
                    border ${
                      selectedProducts.includes(product.id) ? "border-black" : "border-[#d1d5d5]"
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
