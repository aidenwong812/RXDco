import { useDetail } from "../../../providers/DetailProvider"
import Media from "../../../shared/Media"
import CTAButton from "../LandingPage/CTAButton"

const TryOnSize = () => {
  const { details } = useDetail()

  return (
    <div
      className="max-w-[496px] bg-[url('/images/detail_background.svg')]
        bg-[left_top] relative
        pt-[50px] px-[32px] md:px-[50px] flex flex-col items-center 
        rounded-[1em]"
    >
      <p
        className="font-radikal_light text-[28px] tracking-[-0.67px] leading-[2.125rem]
      font-[400] md:text-[32px] pb-[24px] text-white text-center"
      >
        Try {details?.size_name || details?.name} on for size
      </p>
      <p
        className="pb-[24px] font-radikal_light text-[16px] text-white 
      font-[300] text-center"
      >
        See how good our packaging can make your brand look.
      </p>
      <CTAButton
        href={`/try-it-on?product=${details?.id}`}
        className="!px-[31px] !pt-[11px] !pb-[10px] !text-[14px] !border-none !text-blue
            !bg-white hover:!text-white hover:!bg-blue font-radikal_medium mb-[3rem]"
      >
        {details?.size_text || "Try it on"}
      </CTAButton>
      <Media
        type="image"
        link={details?.cta_image}
        blurLink={details?.cta_image}
        containerClasses="w-full 2lg:w-[396px] aspect-[1/1]"
      />
    </div>
  )
}

export default TryOnSize
