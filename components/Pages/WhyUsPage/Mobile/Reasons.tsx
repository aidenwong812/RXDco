import data from "../../../../utils/why-us-list"
import Reason from "./Reason"

const Reasons = () => (
  <div
    className="w-full flex flex-wrap gap-y-[24px] col-span-1
  relative z-[2]"
  >
    {data.map((item, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <Reason item={item} key={i} i={i} />
    ))}
  </div>
)

export default Reasons
