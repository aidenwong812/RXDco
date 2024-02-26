import useMedia from "../../../hooks/useMedia"
import Media from "../../../shared/Media"
import data from "../../../utils/sourcing-inspiration.json"

const GetInspired = () => {
  const isMobile = useMedia()

  return (
    <div
      className="w-full relative bg-secondarygray
       flex justify-center"
    >
      <div className="max-w-[1278px] px-[18px] w-full">
        <h1
          className="text-[32px] md:text-[2.5rem] font-[400] font-radikal_light text-black 
          leading-[1.2] md:leading-[3rem]
          tracking-[-0.8px] pb-[24px] md:pb-[26.8px] text-center"
        >
          Get Inspired
        </h1>
        <p
          className="mx-auto max-w-[45rem] text-[16px] md:text-[1.25rem] text-brown
            leading-[1.5] font-[300] text-center font-radikal_light
            pb-[30px] md:pb-[80px]"
        >
          {isMobile ? (
            <>
              Take a look at how custom engineered packaging could define and distinguish your
              brand.
            </>
          ) : (
            <>
              Take a look at how custom engineered packaging could define and distinguish
              <br />
              your brand.
            </>
          )}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-[1rem] md:gap-x-[2rem] md:gap-y-[4px]">
          {data.map((link, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className="pl-[-1rem] md:pl-[-2rem] pb-[1rem] md:pb-[2rem]" key={i}>
              <Media
                type="image"
                link={link}
                blurLink={link}
                containerClasses="w-full aspect-[1/1] rounded-[0.5rem] overflow-hidden"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GetInspired
