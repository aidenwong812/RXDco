import { AnimatePresence, motion } from "framer-motion"
import PackagesMenu from "./PackagesMenu"
import Icon from "../../shared/Icon"
import { useCustomPackages } from "../../providers/CustomPackagesProvider"

const MCustomPackaging = () => {
  const { isVisiblePackages, setIsVisiblePackages } = useCustomPackages()

  return (
    <>
      <button
        className={`flex justify-between items-center transition duration-[300ms] relative
        px-[32px] py-[20px] border-b border-b-gray w-full ${
          isVisiblePackages ? "text-white bg-brown" : "text-black"
        }`}
        type="button"
        onClick={() => setIsVisiblePackages(!isVisiblePackages)}
      >
        <p>Custom Packaging</p>
        <Icon
          name={isVisiblePackages ? "chevron-up" : "chevron-forward"}
          size={16}
          raw
          color={isVisiblePackages ? "white" : "#b19662"}
        />
      </button>
      <AnimatePresence initial={false}>
        {isVisiblePackages && (
          <motion.section
            className="px-[32px] border-b-[1px] border-b-gray overflow-hidden bg-gray"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto", paddingTop: "12px", paddingBottom: "12px" },
              collapsed: { height: 0, paddingTop: 0, paddingBottom: 0 },
            }}
            transition={{
              duration: 0.1,
            }}
          >
            <PackagesMenu />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}

export default MCustomPackaging
