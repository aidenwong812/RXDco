import { useState } from "react"
import Icon from "../../../shared/Icon"
import Modal from "../../../shared/Modal"
import DownloadButton from "./DownloadButton"
import Test3DViewer from "./Test3DViewer"
import SeeHowItWork from "./SeeHowItWork"
import LookInside from "./LookInside"

const TestLabelViewer = () => {
  const [isOpenHIWModal, setIsOpenHIWModal] = useState(false)
  const [isOpenInsideModal, setIsOpenInsideModal] = useState(false)

  const buttonClasses = `border border-blue bg-blue text-white hover:text-blue hover:bg-white
    font-radikal_medium text-[14px] flex gap-x-[10px] items-center px-[30px] py-[9.6px]
    rounded-[0.5rem] leading-[100%]`

  return (
    <>
      <div className="col-span-1 md:col-span-2 relative min-h-[500px] md:min-h-auto">
        <Test3DViewer />
        <div
          className="flex flex-col md:flex-row items-center md:justify-center 
              gap-y-[8px] md:gap-y-[15px] md:gap-x-[15px] absolute bottom-[-80px] md:bottom-[72px] left-[50%]
              translate-x-[-50%] w-full"
        >
          <button
            className={buttonClasses}
            type="button"
            onClick={() => setIsOpenInsideModal(true)}
          >
            Look inside <Icon name="eye" raw size={16} />
          </button>
          <button className={buttonClasses} type="button" onClick={() => setIsOpenHIWModal(true)}>
            See how it works <Icon name="information" raw size={16} />
          </button>
          <DownloadButton />
        </div>
      </div>
      <Modal
        isVisible={isOpenHIWModal}
        onClose={() => setIsOpenHIWModal(!isOpenHIWModal)}
        id="see-hiw-try-it-on-modal"
      >
        <SeeHowItWork toggleVisible={() => setIsOpenHIWModal(!isOpenHIWModal)} />
      </Modal>
      <Modal
        isVisible={isOpenInsideModal}
        onClose={() => setIsOpenInsideModal(!isOpenInsideModal)}
        id="look-inside-modal"
      >
        <LookInside toggleVisible={() => setIsOpenInsideModal(!isOpenInsideModal)} />
      </Modal>
    </>
  )
}

export default TestLabelViewer
