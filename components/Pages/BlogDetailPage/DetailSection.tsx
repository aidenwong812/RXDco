import CTAButton from "../LandingPage/CTAButton"
import useBlogAside from "../../../hooks/useBlogAside"
import { ASIDE } from "../../../utils/blog-aisde"
import useMedia from "../../../hooks/useMedia"
import { useBlog } from "../../../providers/BlogProvider"
import DetailFooter from "./DetailFooter"

const DetailSection = () => {
  const { containerRef, asideMode } = useBlogAside()
  const isMobile = useMedia()
  const { details } = useBlog()

  return (
    <div
      className="w-full relative bg-secondarygray md:px-[78px]
      flex flex-col md:flex-row pt-[50px] pb-[50px] md:pb-[4.5rem]"
      ref={containerRef}
    >
      {!isMobile && (
        <aside className="px-[18px] w-[25%] sticky">
          <div
            className={`${
              // eslint-disable-next-line no-nested-ternary
              asideMode === ASIDE.RELAITVE
                ? "relative"
                : asideMode === ASIDE.FIXED
                ? "w-[283.172px] h-[176.969px] fixed top-[120px]"
                : "w-full h-fit absolute bottom-0"
            }`}
          >
            <p
              className="text-[1.75rem] font-[400] leading-[2.125rem] pb-[24px]
                font-radikal_light"
            >
              Wanna know more?
            </p>
            <p
              className="font-radikal_light text-darkgray leading-[1.4]
                pb-[32px] font-[300]"
            >
              Contact our sales team about your <br />
              packaging and branding needs.
            </p>
            <CTAButton
              href="#request-a-quote"
              className="!bg-black !border-black !text-white hover:!bg-white hover:!border-blue hover:!text-black
                    !font-radikal_medium !text-[14px] !py-[9.6px]"
            >
              Get started
            </CTAButton>
          </div>
        </aside>
      )}
      <div className="w-full md:w-[75%] flex flex-wrap px-[16px] md:px-[18px]">
        <div
          className="pb-[32px] mb-[20px] border-b border-b-mediumgray w-full
        flex justify-between flex-col md:flex-row"
        >
          <p className="font-radikal_medium text-[12px] leading-[1.5] text-black">
            {details?.look_at}
          </p>
          <p className="font-radikal_medium text-[12px] leading-[1.5] text-black">
            {details?.author}
          </p>
        </div>
        {details?.content}
        <DetailFooter />
      </div>
      {isMobile && (
        <div
          className="flex flex-col items-center pt-[64px] mt-[64px]
        border-t border-t-mediumgray pb-[22px]"
        >
          <p
            className="text-[1.75rem] font-[400] leading-[2.125rem] pb-[24px]
                font-radikal_light px-[18px] md:px-0"
          >
            Wanna know more?
          </p>
          <p
            className="font-radikal_light text-darkgray leading-[1.4]
                pb-[24px] md:pb-[32px] font-[300] text-center px-[18px] md:px-0"
          >
            Contact our sales team about your packaging and branding needs.
          </p>
          <CTAButton
            href="#request-a-quote"
            className="!bg-black !border-none !text-white hover:!bg-white hover:!text-black
                    !font-radikal_medium !text-[14px] !py-[11px] !px-[31px]"
          >
            Get started
          </CTAButton>
        </div>
      )}
    </div>
  )
}

export default DetailSection
