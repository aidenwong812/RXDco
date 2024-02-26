import { useRouter } from "next/router"

const CTAButton = ({ children, href, className = "" }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(href)
  }

  return (
    <button
      type="button"
      className={`px-[30px] py-[10px] text-white bg-brown border-[1px] border-brown hover:bg-white hover:text-brown
      transition duration-[300ms] rounded-[0.5rem] font-radikal_light ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default CTAButton
