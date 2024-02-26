import { useRequestSample } from "../../../../providers/RequestSampleProvider"
import data from "../../../../utils/interest-products.json"

const SelectProducts = () => {
  const { handleSelectProduct, selectedProducts } = useRequestSample()

  return (
    <>
      <p
        className="py-[40px] md:py-[32px] text-[1.5rem] !text-lightblack font-radikal_light 
        text-left leading-[120%] !font-[700]
        border-b border-b-[#d1d5db]"
      >
        Which products are you interested in?
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-[20px] gap-y-[40px] mb-[40px]">
        {data.map((product) => (
          <button
            key={product.id}
            type="button"
            className="w-full flex items-start relative rounded-[0.5rem] cursor-pointer gap-x-[10px]"
            onClick={() => handleSelectProduct(product.id)}
          >
            <div
              className={`w-[16px] aspect-[1/1] border border-black rounded-[0.25rem] top-[10px] left-[10px] z-[4]
                    transition duration-[200ms]
                    ${selectedProducts.includes(product.id) ? "bg-green" : ""}`}
            />
            <p
              className="text-[16px] font-radikal_light !text-lightblack !mb-0 !text-left
            !leading-[1]"
            >
              {product.name}
            </p>
          </button>
        ))}
      </div>
    </>
  )
}

export default SelectProducts
