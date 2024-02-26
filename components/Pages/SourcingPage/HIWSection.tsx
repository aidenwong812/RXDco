import useMedia from "../../../hooks/useMedia"
import Media from "../../../shared/Media"

const HIWSection = () => {
  const isMobile = useMedia()

  return (
    <div
      className="w-full relative bg-secondarygray
       px-[16px] md:px-[48px] pb-[80px] md:pb-[12.5rem] pt-[1px] md:pt-[111px]"
    >
      <Media
        type="image"
        link="/images/development-how-it-works-circle.svg"
        blurLink="/images/development-how-it-works-circle.svg"
        containerClasses="!absolute w-[233px] aspect-[233/168] !pointer-events-none
        right-[-3.5rem] md:right-[-1.5rem] top-[40rem] md:top-[20.45rem]"
      />
      <Media
        type="image"
        link="/images/development-how-it-works-leaf.svg"
        blurLink="/images/development-how-it-works-leaf.svg"
        containerClasses="w-[286px] aspect-[286/322] !absolute top-[5rem] 
        md:top-[12.45rem] left-[-6rem] !pointer-events-none"
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
              link="/images/blue-lamp.svg"
              blurLink="/images/blue-lamp.svg"
              containerClasses="w-[35px] aspect-[35/54]"
            />
          </div>
          <h5 className="leading-[2.125rem] font-[400] font-radikal_light text-[1.75rem] mb-[1.5rem] mt-[1rem]">
            Tell us your big idea
          </h5>
          <p className="text-darkgray font-[300] font-radikal_light text-[16px]">
            {isMobile ? (
              <>
                We work with brands looking to shake up the industry and challenge the status quo.
                If you have a big idea for packaging and can’t find what you need in our product
                listing, give us a brief and we’ll get to work sourcing the perfect packaging for
                your products.
              </>
            ) : (
              <>
                We work with brands looking to shake up
                <br />
                the industry and challenge the status
                <br />
                quo. If you have a big idea for packaging
                <br />
                and can’t find what you need in our
                <br />
                product listing, give us a brief and we’ll
                <br />
                get to work sourcing the perfect
                <br />
                packaging for your products.
              </>
            )}
          </p>
        </div>
        <div
          className="max-w-[24.5rem] w-full h-fit
          px-[32px] py-[48px] md:py-[3.5rem] md:px-[3rem] rounded-[1rem] bg-white shadow-[0_0_2rem_rgba(0,0,0,0.05)]
          relative z-[10]"
        >
          <div className="h-[60px]">
            <Media
              type="image"
              link="/images/blue-sparkle.svg"
              blurLink="/images/blue-sparkle.svg"
              containerClasses="w-[35px] aspect-[35/54]"
            />
          </div>
          <h5 className="leading-[2.125rem] font-[400] font-radikal_light text-[1.75rem] mb-[1.5rem] mt-[1rem]">
            We’ll find a solution
          </h5>
          <p className="text-darkgray font-[300] font-radikal_light text-[16px]">
            {isMobile ? (
              <>
                Thanks to our industry connections and resources, we can supply any type of
                packaging to meet your exact needs. If we don’t carry it and we can’t design it, we
                know someone who can.
              </>
            ) : (
              <>
                Thanks to our industry connections and
                <br />
                resources, we can supply any type of
                <br />
                packaging to meet your exact needs. If
                <br />
                we don’t carry it and we can’t design it,
                <br />
                we know someone who can.
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

export default HIWSection
