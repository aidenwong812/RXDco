import useMedia from "../../hooks/useMedia"
import { CustomPackagesProvider } from "../../providers/CustomPackagesProvider"
import DesktopHeader from "../DesktopHeader"
import MobileHeader from "../MobileHeader"

const MainHeader = () => {
  const isNoteBook = useMedia(1024)

  return (
    <div className="fixed w-full flex justify-center lg:py-[8px] z-[1000]">
      <CustomPackagesProvider>
        {isNoteBook ? <MobileHeader /> : <DesktopHeader />}
      </CustomPackagesProvider>
    </div>
  )
}

export default MainHeader
