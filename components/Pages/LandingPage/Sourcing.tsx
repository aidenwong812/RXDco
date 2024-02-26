import useMedia from "../../../hooks/useMedia"
import Media from "../../../shared/Media"
import CTAButton from "./CTAButton"

const Sourcing = () => {
  const isMobile = useMedia()

  return (
    <div
      className="w-full flex flex-col lg:flex-row lg:relative bg-lightgray
            px-[16px] md:px-[20px] xl:px-[70px] relative pt-[100px] md:pb-[100px]"
    >
      <div className="absolute left-0 top-0 h-[530px] w-full bg-gray" />
      {isMobile && (
        <>
          <Media
            type="image"
            link="/images/services_leaf.svg"
            blurLink="/images/services_leaf.png"
            containerClasses="w-[300px] md:w-[360px] aspect-[360/460] !absolute left-[-50px] top-[-350px] md:top-[-10rem] left-[-4rem] z-[2]"
          />
          <Media
            type="image"
            link="/images/services_circle3.svg"
            blurLink="/images/services_circle3.png"
            containerClasses="w-[135px] md:w-[316px] aspect-[316/208] !absolute top-[2.5rem] right-[-1rem] z-[2]"
          />
        </>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-[20px] lg:gap-[30px] relative z-[3]">
        <div className="relative z-[1] flex justify-end md:block">
          <Media
            type="image"
            link="/images/huge.webp"
            blurLink="/images/huge.webp"
            containerClasses="z-[2] w-[calc(100%-30px)] md:w-[500px] 2md:w-[550px] 3md:w-[710px] 
                aspect-[1406/949] rounded-[12px] overflow-hidden
                md:translate-x-[-150px] md:translate-y-[50px] 3md:translate-x-[100px] 3md:translate-y-[-50px]"
          />
        </div>
        <div className="justify-center items-center block translate-y-[-45px] md:hidden 3md:flex 3md:translate-y-[100px] relative z-[2]">
          <div className="w-[318px] 3md:w-[440px] px-[24px] py-[32px] 3md:p-[64px] bg-white rounded-[1em]">
            <p className="text-[28px] md:text-[40px] text-brown font-radikal_light">Sourcing</p>
            <p className="text-[16px] text-black pt-[12px] 3md:pt-[24px] pb-[32px] font-radikal_light">
              {isMobile ? (
                <>
                  Thanks to our huge network,
                  <br />
                  we’re able to source any type of
                  <br />
                  compliance packaging you might
                  <br />
                  need. If we don’t carry it, we
                  <br />
                  guarantee we can supply it.
                </>
              ) : (
                <>
                  Thanks to our huge network, we’re able to
                  <br />
                  source any type of compliance packaging
                  <br />
                  you might need. If we don’t carry it, we
                  <br />
                  guarantee we can supply it.
                </>
              )}
            </p>
            <CTAButton href="/services/sourcing">Tell us your idea</CTAButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sourcing
