import CTAButton from "../LandingPage/CTAButton"
import BlogList from "./BlogList"
import useBlogAside from "../../../hooks/useBlogAside"
import { ASIDE } from "../../../utils/blog-aisde"
import Media from "../../../shared/Media"
import useMedia from "../../../hooks/useMedia"

const BlogsSection = () => {
  const { containerRef, asideMode } = useBlogAside()
  const isMobile = useMedia()

  return (
    <div
      className="w-full relative bg-secondarygray md:px-[4.95rem]
      flex flex-col md:flex-row md:pt-[69px] pb-[50px] relative z-[2]"
      ref={containerRef}
    >
      <Media
        type="image"
        link="/images/blog-list.png"
        blurLink="/images/blog-list.png"
        containerClasses="w-full aspect-[1440/440] !absolute bottom-[-163px] left-0 hidden md:block
        !pointer-events-none"
      />
      {!isMobile && (
        <aside className="pl-[17px] w-[25%] sticky">
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
              className="!bg-black !border-none !text-white hover:!bg-white hover:!text-black
                    !font-radikal_medium !text-[14px] !px-[31px] !pt-[10px] !pb-[11px]"
            >
              Get started
            </CTAButton>
          </div>
        </aside>
      )}
      <div className="w-full md:w-[75%] flex flex-wrap px-[16px] md:pl-[6px] md:pr-0">
        <BlogList />
      </div>
      {isMobile && (
        <div
          className="flex flex-col items-center pt-[64px] mt-[64px]
        border-t border-t-[#dadada]"
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
                    !font-radikal_medium !text-[14px]"
          >
            Get started
          </CTAButton>
        </div>
      )}
    </div>
  )
}

export default BlogsSection
