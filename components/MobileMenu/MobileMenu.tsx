import { motion } from "framer-motion"
import Link from "next/link"
import MCustomPackaging from "../MCustomPackaging"
import MProducts from "../MProducts"
import MServices from "../MServices"
import { useCustomPackages } from "../../providers/CustomPackagesProvider"
import { CATEGORIES } from "../../utils/customPackages"
import BackMenuButton from "./BackMenuButton"
import ProductList from "../ProductList"
import { ProductsProvider } from "../../providers/ProductsProvider"

const MobileMenu = () => {
  const { selectedCategory } = useCustomPackages()

  return (
    <div className="w-screen h-screen fixed left-0 top-[80px] z-[2] bg-[rgba(0,0,0,.5)]">
      <motion.div
        className="w-full h-[calc(100vh-80px)] bg-white text-[16px] font-radikal_light text-black cursor-pointer overflow-y-auto
          shadow-[0_0_1rem_rgba(0,0,0,.2)]"
        initial={{
          x: "100%",
        }}
        animate={{
          x: "0%",
        }}
        exit={{
          x: "0%",
        }}
        transition={{
          duration: 0.2,
        }}
      >
        {selectedCategory === CATEGORIES.NOT_SELECTED ? (
          <>
            <MCustomPackaging />
            <ProductsProvider>
              <MProducts />
            </ProductsProvider>
            <MServices />
            <Link href="/try-it-on">
              <div className="px-[32px] py-[20px] border-b border-b-gray">Try it on</div>
            </Link>
            <Link href="/inspiration">
              <div className="px-[32px] py-[20px] border-b border-b-gray">Inspiration</div>
            </Link>
            <Link href="/blog">
              <div className="px-[32px] py-[20px] border-b border-b-gray">Blog</div>
            </Link>
            <Link href="/whyus">
              <div className="px-[32px] py-[20px] border-b border-b-gray">Why us</div>
            </Link>
            <Link href="/faq">
              <div className="px-[32px] py-[20px] border-b border-b-gray">FAQ</div>
            </Link>
            <Link href="/contact">
              <div className="px-[32px] py-[20px] border-b border-b-gray">Contact</div>
            </Link>
          </>
        ) : (
          <>
            <BackMenuButton />
            <div className="p-[20px]">
              <ProductList />
            </div>
          </>
        )}
      </motion.div>
    </div>
  )
}

export default MobileMenu
