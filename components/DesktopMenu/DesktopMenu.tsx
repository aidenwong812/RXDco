import Link from "next/link"
import { ProductsProvider } from "../../providers/ProductsProvider"
import DCustomPackaging from "../DCustomPackaging"
import DProducts from "../DProducts"
import DServices from "../DServices"
import useIsLighMode from "../../hooks/useIsLightMode"

const DesktopMenu = () => {
  const isLightMode = useIsLighMode()

  const linkClassName = `lg:px-[20px] py-[10px] hover:text-white hover:bg-blue transition duration-[300ms] rounded-[0.5rem]
  ${isLightMode ? "!text-white" : ""}`

  return (
    <div
      className="flex flex-grow justify-end 
        text-[14px] lg:text-[14px] xl:text-[16px] font-radikal_light text-black"
    >
      <DCustomPackaging />
      <ProductsProvider>
        <DProducts />
      </ProductsProvider>
      <DServices />
      <Link href="/try-it-on">
        <p className={linkClassName}>Try it on</p>
      </Link>
      <Link href="/inspiration">
        <p className={linkClassName}>Inspiration</p>
      </Link>
      <Link href="/blog">
        <p className={linkClassName}>Blog</p>
      </Link>
      <Link href="/why-us">
        <p className={linkClassName}>Why us</p>
      </Link>
      <Link href="/faq">
        <p className={linkClassName}>FAQ</p>
      </Link>
      <Link href="/contact">
        <p className={`${linkClassName} lg:!pr-[16px] lg:!pl-[20px]`}>Contact</p>
      </Link>
    </div>
  )
}

export default DesktopMenu
