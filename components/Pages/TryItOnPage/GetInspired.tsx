import useMedia from "../../../hooks/useMedia"
import Media from "../../../shared/Media"
import data from "../../../utils/try-it-on-inspiration.json"
import TestLabelButton from "./TestLabelButton"

const GetInspired = ({ scrollToTestlabel }) => {
  const isMobile = useMedia()

  return (
    <div
      className="w-full relative bg-secondarygray
       flex justify-center pb-[64px] pt-[48px] md:pt-[86px]"
    >
      <Media
        type="image"
        link="/images/inspiration-snippet.svg"
        blurLink="/images/inspiration-snippet.svg"
        containerClasses="w-full aspect-[1441/339] !absolute top-[-104px] left-0"
      />
      <div className="bg-red w-[40px] aspect-[1/1] absolute top-[92px] left-[14%] rounded-full hidden md:block" />
      <div className="max-w-[1278px] px-[18px] w-full">
        <h1
          className="text-[32px] md:text-[2.5rem] font-[400] font-radikal_light text-black 
          leading-[1.2] md:leading-[3rem]
          tracking-[-0.8px] pb-[25px] md:pb-[26.8px] text-center"
        >
          Get Inspired
        </h1>
        <p
          className="mx-auto max-w-[45rem] text-[16px] md:text-[1.25rem] text-brown
            leading-[1.5] font-[300] text-center font-radikal_light
            pb-[24px] md:pb-[32px]"
        >
          {isMobile ? (
            <>Take a look at the wow factor we can add to your brand.</>
          ) : (
            <>Take a look at the wow factor we can add to your brand.</>
          )}
        </p>
        <div className="w-full flex justify-center pb-[30px] md:pb-[80px]">
          <TestLabelButton onClick={scrollToTestlabel} />
        </div>
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
