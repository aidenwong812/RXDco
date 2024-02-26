import { useRouter } from "next/router"
import { ILayout } from "./types"
import SingleHeader from "../SingleHeader"

function SingleLayout({ children }: ILayout) {
  const { pathname } = useRouter()
  const isBluePage = pathname.includes("/request-a-sample")
  const isBrownPage = pathname.includes("/request-a-quote")
  return (
    <div
      className={`${isBluePage ? "bg-blue" : ""} ${
        isBrownPage ? "bg-brown" : ""
      } min-h-screen py-[24px] px-[16px] md:p-[40px] relative`}
    >
      <SingleHeader />
      <div className="w-full flex justify-center">
        <div className="w-full lg:w-[1024px]">{children}</div>
      </div>
    </div>
  )
}

export default SingleLayout
