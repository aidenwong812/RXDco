import modaldata from "../../../utils/inspiration-trending-modal.json"

const MobileProductViewer = ({
  prevProduct,
  nextProduct,
  isOpenModal,
  setIsOpenModal,
  selectedProduct,
}) => (
  <div className="flex flex-col gap-y-[40px] items-center">
    <div className="flex w-full justify-between px-[32px] items-center">
      <button
        type="button"
        className="rotate-[180deg] hover:scale-[1.2] transtion duration-[300ms] !h-fit"
        onClick={prevProduct}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Icons/modal-arrow.svg" alt="not found icon" />
      </button>
      <button type="button" onClick={() => setIsOpenModal(!isOpenModal)}>
        <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2l18 18M2 20L20 2" stroke="#FFF" stroke-width="2" fill="none" />
        </svg>
      </button>
      <button
        type="button"
        className="hover:scale-[1.2] transtion duration-[300ms] !h-fit"
        onClick={nextProduct}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Icons/modal-arrow.svg" alt="not found icon" />
      </button>
    </div>
    <div className="rounded-[0.8rem] bg-white px-[24px] py-[32px] max-h-[calc(100vh-141px)] overflow-y-auto">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={modaldata[selectedProduct]}
        alt="not found"
        className="rounded-[8px] max-w-[100%] w-[auto]"
      />
    </div>
  </div>
)

export default MobileProductViewer
