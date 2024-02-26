import { useTestLabel } from "../../../providers/TestLabelProvider"
import CTAButton from "../LandingPage/CTAButton"

const SeeHowItWork = ({ toggleVisible }) => {
  const { selected3DObject } = useTestLabel()

  return (
    <div>
      <div className="px-[8px] w-full flex justify-end mb-[12px]">
        <button
          type="button"
          className="md:absolute cursor-pointer md:z-[2] 
                    md:top-[12px] md:right-[-48px]
                    hover:scale-[1.2] transition duration-[300ms]"
          onClick={toggleVisible}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2l18 18M2 20L20 2" stroke="#FFF" stroke-width="2" fill="none" />
          </svg>
        </button>
      </div>
      <div
        className="rounded-[0.5rem] bg-white 
          p-[18px] md:py-[40px] md:px-[36px] mx-[8px]
          relative max-w-[461px] max-h-[90vh] overflow-y-auto overflow-x-hidden"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <p className="text-[28px] tracking-[-0.56px] mb-[16px] leading-[1.1] font-radikal_light">
          {selected3DObject.label}
        </p>
        <p className="text-brown text-[20px] tracking-[-0.4px] mb-[24px] leading-[1.4] font-radikal_light">
          {selected3DObject.description}
        </p>
        <video src={selected3DObject.hiw} loop muted autoPlay className="w-[100%]" />
        <div
          className="w-full flex justify-between md:px-[8px] 
              md:gap-x-[18px] mt-[24px]"
        >
          <CTAButton
            href="/request-a-sample"
            className="font-radikal_medium text-[.875rem]
                  !py-[0.6rem] !px-[1.875rem] !border-black !bg-black !text-white 
                  hover:!border-blue hover:!bg-white hover:!text-black md:!w-full"
          >
            Get a sample
          </CTAButton>
          <CTAButton
            href="/request-a-quote"
            className="font-radikal_medium text-[.875rem]
                  !py-[0.6rem] !px-[1.875rem] !border-black !bg-white !text-black 
                  hover:!border-blue hover:!bg-black hover:!text-white md:!w-full"
          >
            Request a quote
          </CTAButton>
        </div>
      </div>
    </div>
  )
}

export default SeeHowItWork
