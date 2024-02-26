import { useWhyUsPage } from "../../../../providers/WhyUsPageProvider"
import data from "../../../../utils/why-us-list"
import ActiveReason from "./ActiveReason"
import InActiveReason from "./InActiveReason"

const Reasons = () => {
  const { selectedIndex } = useWhyUsPage()
  const { reasonRef } = useWhyUsPage()

  return (
    <div
      className="col-span-2 relative z-[2] md:mx-[-20px]
      flex flex-nowrap gap-0"
      ref={reasonRef}
    >
      {data.map((item, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={i}>
          {selectedIndex === i ? (
            <ActiveReason i={i} item={item} />
          ) : (
            <InActiveReason item={item} i={i} />
          )}
        </div>
      ))}
    </div>
  )
}

export default Reasons
