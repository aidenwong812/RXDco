const ReasonIcon = ({ item }) => (
  <div
    className="w-[48px] aspect-[1/1] flex justify-center items-center rounded-full"
    style={{
      background: item.color,
    }}
  >
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={item.icon} alt="not found icon" />
  </div>
)

export default ReasonIcon
