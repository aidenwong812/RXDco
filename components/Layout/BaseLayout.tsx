import { ILayout } from "./types"
import Footer from "../Footer"
import MainHeader from "../MainHeader"

function BaseLayout({ children }: ILayout) {
  return (
    <div
      className="w-full flex flex-col items-center
      relative bg-[url('/images/background.png')] bg-[100%_auto]
      bg-[repeat_no-repeat] bg-gray overflow-hidden"
    >
      <MainHeader />
      {children}
      <Footer />
    </div>
  )
}

export default BaseLayout
