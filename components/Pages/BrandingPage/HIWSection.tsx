import useMedia from "../../../hooks/useMedia"
import Media from "../../../shared/Media"

const HIWSection = () => {
  const isMobile = useMedia()

  return (
    <div
      className="w-full bg-secondarygray
                pt-[50px] md:pt-[150px]
                relative z-[3]"
    >
      <Media
        type="image"
        link="/images/inspiration-snippet.svg"
        blurLink="/images/inspiration-snippet.svg"
        containerClasses="w-full aspect-[1440/339] !absolute 
        bottom-[-100px] md:bottom-[-225px] z-[2]"
      />
      <div
        className="w-[40px] rounded-full bg-iblue 
      md:right-[40px] md:bottom-[-5px] 
      right-[20px] bottom-[-70px]
      absolute aspect-[1/1] z-[3]"
      />
      <p
        className="text-[14px] text-yellow font-radikal_medium text-center pb-[8px] md:pb-[12px]
      px-[18px] xl:px-[100px] relative z-[3]"
      >
        How it works
      </p>
      <p
        className="text-[32px] md:text-[48px] text-black font-radikal_light text-center pb-[24px] md:pb-[32px]
      leading-[120%] md:leading-[100%] tracking-[-0.8px]"
      >
        Select your perfect packaging
      </p>
      <p className="text-[16px] text-darkgray font-radikal_light text-center">
        {isMobile ? (
          <>
            Put your own stamp on our <br /> packaging with our branding and <br /> custom design
            services.
          </>
        ) : (
          <>Put your own stamp on our packaging with our branding and custom design services.</>
        )}
      </p>
      <div
        className="grid grid-cols-1 md:grid-cols-3 pt-[40px] md:pt-[60px]
      gap-x-0 md:gap-x-[30px] gap-y-[20px] md:gap-y-0 relative z-[3]
      px-[18px] xl:px-[135px]"
      >
        <div
          className="bg-white rounded-[0.8rem] md:py-[32px] md:px-[40px] p-[24px]
        shadow-[0_0_2rem_rgba(0,0,0,.05)]"
        >
          <Media
            type="image"
            link="https://rxdcoassets.b-cdn.net/clip.svg"
            blurLink="https://rxdcoassets.b-cdn.net/clip.svg"
            containerClasses="w-[50px] aspect-[50/45]"
          />
          <p className="font-radikal_medium pt-[30px] text-black text-[16px]">
            Send us your artwork and logo
          </p>
          <p className="font-radikal_light pt-[24px] text-darkgray text-[16px]">
            We’ll print these on labels or directly onto the packaging, depending on the product
            you’ve chosen.
          </p>
        </div>
        <div
          className="bg-white rounded-[0.8rem] md:py-[32px] md:px-[40px] p-[24px]
        shadow-[0_0_2rem_rgba(0,0,0,.05)]"
        >
          <Media
            type="image"
            link="https://rxdcoassets.b-cdn.net/pen.svg"
            blurLink="https://rxdcoassets.b-cdn.net/pen.svg"
            containerClasses="w-[27px] aspect-[27/46]"
          />
          <p className="font-radikal_medium pt-[30px] text-black text-[16px]">
            Or, let us design your branding
          </p>
          <p className="font-radikal_light pt-[24px] text-darkgray text-[16px]">
            Our design team can devise a logo and print design that suits your business and works
            with your packaging choice.
          </p>
        </div>
        <div
          className="bg-white rounded-[0.8rem] md:py-[32px] md:px-[40px] p-[24px]
        shadow-[0_0_2rem_rgba(0,0,0,.05)]"
        >
          <Media
            type="image"
            link="https://rxdcoassets.b-cdn.net/box_2020-11-25-103007.svg"
            blurLink="https://rxdcoassets.b-cdn.net/box_2020-11-25-103007.svg"
            containerClasses="w-[46px] aspect-[46/51]"
          />
          <p className="font-radikal_medium pt-[30px] text-black text-[16px]">
            We ship your products
          </p>
          <p className="font-radikal_light pt-[24px] text-darkgray text-[16px]">
            Customers receive your products via our distribution or manufacturing partners, or
            directly from our factory.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HIWSection
