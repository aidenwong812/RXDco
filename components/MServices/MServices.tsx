import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Icon from "../../shared/Icon"
import ServicesList from "./ServicesList"

const MServices = () => {
  const [isVisibleServiceList, setIsVisibleServiceList] = useState(false)

  return (
    <>
      <button
        className={`flex gap-x-[10px] justify-between items-center transition duration-[300ms] relative
          px-[32px] py-[20px] border-b border-b-gray w-full ${
            isVisibleServiceList ? "text-white bg-brown" : "text-black"
          }`}
        type="button"
        onClick={() => setIsVisibleServiceList(!isVisibleServiceList)}
      >
        <p>Services</p>
        <Icon
          name={isVisibleServiceList ? "chevron-up" : "chevron-forward"}
          size={16}
          raw
          color={isVisibleServiceList ? "white" : "#b19662"}
        />
      </button>
      <AnimatePresence initial={false}>
        {isVisibleServiceList && (
          <motion.section
            className="px-[24px] border-b-[1px] border-b-lightgray overflow-hidden bg-gray"
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
            <ServicesList />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}

export default MServices
