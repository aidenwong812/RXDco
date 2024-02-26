import { AnimatePresence, motion } from "framer-motion"
import { useProducts } from "../../providers/ProductsProvider"
import Icon from "../../shared/Icon"
import ProductsTrending from "./ProductsTrending"

const MProducts = () => {
  const { isVisibleProductsTrending, setIsVisibleProductsTrending } = useProducts()

  return (
    <>
      <button
        className={`flex gap-x-[10px] justify-between items-center transition duration-[300ms] relative
          px-[32px] py-[20px] border-b border-b-gray w-full ${
            isVisibleProductsTrending ? "text-white bg-brown" : "text-black"
          }`}
        type="button"
        onClick={() => setIsVisibleProductsTrending(!isVisibleProductsTrending)}
      >
        <p>Products</p>
        <Icon
          name={isVisibleProductsTrending ? "chevron-up" : "chevron-forward"}
          size={16}
          raw
          color={isVisibleProductsTrending ? "white" : "#b19662"}
        />
      </button>
      <AnimatePresence initial={false}>
        {isVisibleProductsTrending && (
          <motion.section
            className="px-[24px] border-b-[1px] border-b-lightgray overflow-hidden bg-lightgray"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto", paddingTop: "12px", paddingBottom: "12px" },
              collapsed: { height: 0, paddingTop: 0, paddingBottom: 0 },
            }}
            transition={{
              duration: 0.1,
            }}
          >
            <ProductsTrending />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}

export default MProducts
