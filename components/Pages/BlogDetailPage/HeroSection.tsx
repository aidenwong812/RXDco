import Link from "next/link"
import { useBlog } from "../../../providers/BlogProvider"
import ShareButtons from "./ShareButtons"

const HeroSection = () => {
  const { details } = useBlog()

  return (
    <div
      className="w-full relative bg-secondarygray md:px-[78px]
            pt-[116px] pb-[48px]
            flex items-center flex-wrap"
    >
      <div
        className="w-[100%] px-[16px] 
        md:px-[18px] leading-[1.5] block md:hidden mb-[40px]"
      >
        <picture className="h-auto rounded-[24px] max-w-[100%] leading-[1.5]">
          <img
            src={details?.mobile_image || details?.image}
            className="rounded-[24px] w-full ml-auto mb-[6px] object-cover"
            alt="not found logo"
          />
        </picture>
      </div>
      <div className="w-[100%] md:w-[50%] py-0 px-[16px] md:px-[18px]">
        <Link href="/blog" title="Back to blog">
          <div
            className="uppercase flex items-center text-[12px]
                text-darkgray gap-x-[12px] cursor-pointer"
          >
            <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.666 6H2m4-4.667L1.333 6 6 10.667"
                stroke="#7C7C7C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="leading-[1.5] tracking-[1px] font-radikal_medium">Back</span>
          </div>
        </Link>
        <p
          className="text-[32px] md:text-[3rem] font-radikal_light
          leading-[1] md:leading-[3.625rem] my-[0.67em] mx-0"
        >
          {details?.title}
        </p>
        <p
          className="text-darkgray leading-[1.4] 
            mb-[24px] md:mb-[32px] font-[300]
            font-radikal_light text-[16px]"
        >
          {details?.description}
        </p>
        <div className="flex items-center">
          <span
            className="font-[300] leading-[1.5] 
            text-darkgray mr-[0.5rem] text-radikal_light font-normal
          font-radikal_light"
          >
            Share this article:
          </span>
          <div className="flex items-center justify-center">
            <ShareButtons />
          </div>
        </div>
      </div>
      <div className="w-[50%] px-[18px] leading-[1.5] hidden md:block">
        <picture className="h-auto rounded-[24px] max-w-[100%] leading-[1.5]">
          <img
            src={details?.image}
            className="rounded-[24px] max-w-[100%] h-auto ml-auto mb-[6px]"
            alt="not found logo"
          />
        </picture>
      </div>
    </div>
  )
}

export default HeroSection
