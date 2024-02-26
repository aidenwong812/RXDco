import Media from "../../../shared/Media"
import data from "../../../utils/inspiration.json"

const GetInspired = () => (
  <div
    className="w-full bg-secondarygray
              pt-[100px] md:pt-[150px]
              px-[18px] xl:px-[100px] relative z-[2]"
  >
    <p
      className="text-center text-black text-[32px] md:text-[40px] font-radikal_light 
    pb-[24px] md:pb-[26px] tracking-[-0.8px]"
    >
      Get Inspired
    </p>
    <p
      className="text-yellow text-[16px] md:text-[20px] font-radikal_light text-center 
    pb-[30px] md:pb-[80px]"
    >
      Take a look at the wow factor we can add to your brand.
    </p>
    <div
      className="grid grid-cols-2 md:grid-cols-3 
    gap-[15px] md:gap-[30px]"
    >
      {data.map((link, i) => (
        <Media
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          type="image"
          link={link}
          blurLink={link}
          containerClasses="w-full aspect-[1/1] rounded-[0.8rem] overflow-hidden"
        />
      ))}
    </div>
  </div>
)

export default GetInspired
