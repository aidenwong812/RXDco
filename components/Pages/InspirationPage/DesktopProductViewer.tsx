import modaldata from "../../../utils/inspiration-trending-modal.json"

const DesktopProductViewer = ({
  prevProduct,
  nextProduct,
  isOpenModal,
  setIsOpenModal,
  selectedProduct,
}) => (
  <div className="flex gap-x-[82px] items-center">
    <button
      type="button"
      className="rotate-[180deg] hover:scale-[1.2] transtion duration-[300ms] !h-fit"
      onClick={prevProduct}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/Icons/modal-arrow.svg" alt="not found icon" />
    </button>
    <div className="rounded-[0.8rem] bg-white p-[40px] relative">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={modaldata[selectedProduct]} alt="not found" className="max-h-[75vh]" />
      <button
        type="button"
        className="absolute cursor-pointer z-[2] top-0 right-[-54px]
                            hover:scale-[1.2] transition duration-[300ms]"
        onClick={() => setIsOpenModal(!isOpenModal)}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2l18 18M2 20L20 2" stroke="#FFF" stroke-width="2" fill="none" />
        </svg>
      </button>
    </div>
    <button
      type="button"
      className="hover:scale-[1.2] transtion duration-[300ms] !h-fit"
      onClick={nextProduct}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/Icons/modal-arrow.svg" alt="not found icon" />
    </button>
  </div>
)

export default DesktopProductViewer
