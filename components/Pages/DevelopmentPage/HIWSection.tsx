import useMedia from "../../../hooks/useMedia"
import Media from "../../../shared/Media"

const HIWSection = () => {
  const isMobile = useMedia()

  return (
    <div
      className="w-full relative bg-secondarygray
       px-[16px] md:px-[48px] pb-[80px] md:pb-[12.5rem]"
    >
      <Media
        type="image"
        link="/images/development-how-it-works-circle.svg"
        blurLink="/images/development-how-it-works-circle.svg"
        containerClasses="!absolute w-[233px] aspect-[233/168] !pointer-events-none
        right-[-3.5rem] md:right-[-1.5rem] top-[40rem] md:top-[13.5rem]"
      />
      <Media
        type="image"
        link="/images/development-how-it-works-leaf.svg"
        blurLink="/images/development-how-it-works-leaf.svg"
        containerClasses="w-[286px] aspect-[286/322] !absolute 
        top-[4.5rem] md:top-[5.5rem] left-[-6rem] !pointer-events-none"
      />
      <div className="w-full flex flex-col gap-y-[24px] md:gap-y-0 md:flex-row md:justify-center">
        <div
          className="mr-[2rem] max-w-[24.5rem] w-full
          px-[32px] py-[48px] md:py-[3.5rem] md:px-[3rem] rounded-[1rem] bg-white shadow-[0_0_2rem_rgba(0,0,0,0.05)]
          relative z-[10]"
        >
          <div className="h-[60px]">
            <Media
              type="image"
              link="/images/cup.svg"
              blurLink="/images/cup.svg"
              containerClasses="w-[35px] aspect-[35/54]"
            />
          </div>
          <h5 className="leading-[2.125rem] font-[400] font-radikal_light text-[1.75rem] mb-[1.5rem] mt-[1rem]">
            {isMobile ? (
              <>You send us a challenge</>
            ) : (
              <>
                You send us a <br /> challenge
              </>
            )}
          </h5>
          <p className="text-darkgray font-[300] font-radikal_light text-[16px]">
            {isMobile ? (
              <>
                We love a challenge and work with brands at the forefront of the industry to set new
                packaging trends. Tell us what you need and we’ll dream up a solution.
                <br />
                <br />
                Our heavy investment in R&D gives us the capacity to develop innovative, creative
                packaging that targets gaps in the market by reimagining the status quo.
              </>
            ) : (
              <>
                We love a challenge and work with
                <br />
                brands at the forefront of the industry to
                <br />
                set new packaging trends. Tell us what
                <br />
                you need and we’ll dream up a solution.
                <br />
                <br />
                Our heavy investment in R&D gives us
                <br />
                the capacity to develop innovative,
                <br />
                creative packaging that targets gaps in
                <br />
                the market by reimagining the status
                <br />
                quo.
              </>
            )}
          </p>
        </div>
        <div
          className="max-w-[24.5rem] w-full
          px-[32px] py-[48px] md:py-[3.5rem] md:px-[3rem] rounded-[1rem] bg-white shadow-[0_0_2rem_rgba(0,0,0,0.05)]
          relative z-[10]"
        >
          <div className="h-[60px]">
            <Media
              type="image"
              link="/images/rocket.svg"
              blurLink="/images/rocket.svg"
              containerClasses="w-[35px] aspect-[35/54]"
            />
          </div>
          <h5 className="leading-[2.125rem] font-[400] font-radikal_light text-[1.75rem] mb-[1.5rem] mt-[1rem]">
            {isMobile ? (
              <>We take care of the rest</>
            ) : (
              <>
                We take care of the
                <br /> rest
              </>
            )}
          </h5>
          <p className="text-darkgray font-[300] font-radikal_light text-[16px]">
            {isMobile ? (
              <>
                From initial research and conceptualization through to manufacturing and shipping,
                our in-house team and trusted partner companies manage every step of the process.
                <br />
                <br />
                All you need to do is sit back and watch the packaging we develop bring your brand
                to life.
              </>
            ) : (
              <>
                From initial research and
                <br />
                conceptualization through to
                <br />
                manufacturing and shipping, our in-
                <br />
                house team and trusted partner
                <br />
                companies manage every step of the
                <br />
                process.
                <br />
                <br />
                All you need to do is sit back and watch
                <br />
                the packaging we develop bring your
                <br />
                brand to life.
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

export default HIWSection
