import Masonry from "react-masonry-css"
import Modal from "../../../shared/Modal"
import data from "../../../utils/inspiration-trending.json"
import useInspirationModal from "../../../hooks/useInspirationModal"
import useMedia from "../../../hooks/useMedia"
import DesktopProductViewer from "./DesktopProductViewer"
import MobileProductViewer from "./MobileProductViewer"

const Products = () => {
  const isMobile = useMedia()
  const { handleClick, nextProduct, prevProduct, isOpenModal, setIsOpenModal, selectedProduct } =
    useInspirationModal()

  const breakpointColumnsObj = {
    default: 3,
    768: 2,
  }

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="inspiration-trending"
        columnClassName="inspiration-trending-column"
      >
        {data.map((link, i) => (
          <button
            type="button"
            className="cursor-[url('/images/crosshair.svg'),_pointer] mb-[16px] md:mb-[36px]"
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            onClick={() => handleClick(i)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={link} className="rounded-l-[8px]" alt="not found" />
          </button>
        ))}
      </Masonry>

      <Modal
        isVisible={isOpenModal}
        onClose={() => setIsOpenModal(!isOpenModal)}
        id="inspiration-modal"
        modalClassName={`${isMobile ? "!items-end" : ""}`}
      >
        {isMobile ? (
          <MobileProductViewer
            prevProduct={prevProduct}
            nextProduct={nextProduct}
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
            selectedProduct={selectedProduct}
          />
        ) : (
          <DesktopProductViewer
            prevProduct={prevProduct}
            nextProduct={nextProduct}
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
            selectedProduct={selectedProduct}
          />
        )}
      </Modal>
    </>
  )
}

export default Products
