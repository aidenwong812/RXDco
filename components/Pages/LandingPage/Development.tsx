import useMedia from "../../../hooks/useMedia"
import Media from "../../../shared/Media"
import CTAButton from "./CTAButton"

const Development = () => {
  const isMobile = useMedia()

  return (
    <div
      className="w-full flex flex-col lg:flex-row lg:relative bg-gray
            px-[16px] md:px-[20px] xl:px-[70px] relative pt-[100px] pb-[120px]"
    >
      <Media
        type="image"
        link="/images/services_circle.svg"
        blurLink="/images/services_circle.png"
        containerClasses="w-[161px] aspect-[1/1] md:w-[369px] md:aspect-[369/407] !absolute top-[-95px] md:top-[-80px] right-0 z-[2]"
      />
      <Media
        type="image"
        link="/images/services_circle2.svg"
        blurLink="/images/services_circle2.png"
        containerClasses="hidden md:block w-[123px] aspect-[123/161] !absolute left-0 z-[2]"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-[20px] lg:gap-[30px] relative z-[3]">
        <div className="justify-start md:justify-end items-start md:items-center flex">
          <div className="w-fit">
            <p className="text-[28px] md:text-[40px] text-brown font-radikal_light">
              Product Development
            </p>
            <p className="text-[16px] text-black py-[32px] font-radikal_light">
              {isMobile ? (
                <>
                  Collaborate with our product design team to develop new styles of compliance
                  packaging to elevate your brand and redefine industry norms.
                </>
              ) : (
                <>
                  Collaborate with our product design team to develop
                  <br />
                  new styles of compliance packaging to elevate
                  <br />
                  your brand and redefine industry norms.
                </>
              )}
            </p>
            <CTAButton href="/services/development">{`Let's do it!`}</CTAButton>
          </div>
        </div>
        <div className="flex justify-end pr-[40px] md:pr-[80px] pt-[40px] md:pt-0">
          <Media
            type="image"
            link="/images/shutterstock.webp"
            blurLink="/images/shutterstock.webp"
            containerClasses="z-[2] w-[304px] 3lg:w-[465px] aspect-[1010/674] rounded-[12px] overflow-hidden
            shadow-[25px_26px_#fff]"
          />
        </div>
      </div>
    </div>
  )
}

export default Development
