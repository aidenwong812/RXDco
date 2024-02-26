/* eslint-disable  @next/next/no-html-link-for-pages */
import { facebookIcon } from "../../../utils/facebook-icon"
import { twitterIcon } from "../../../utils/twitter-icon"
import { linkedinIcon } from "../../../utils/linkedin-icon"
import { linkIcon } from "../../../utils/link-icon"

const BlockQuote = () => (
  <div className="module__box">
    <blockquote>
      {`“"We believe consumers are going to overwhelmingly start seeking out cannabis brands that show they understand the seriousness of the current Climate Change Crisis."”`}
    </blockquote>
    <div
      className="flex md:justify-between md:items-center 
        flex-col md:flex-row w-full "
    >
      <p
        className="font-[300] leading-[1.5] 
            text-darkgray mr-[0.5rem] text-radikal_light font-normal
          font-radikal_light pt-[6px] !mb-0"
      >
        Mark Levovitz
      </p>
      <div>
        <div className="flex items-center pt-[6px]">
          <span
            className="font-[300] leading-[1.5] 
            text-darkgray mr-[0.5rem] text-radikal_light font-normal
          font-radikal_light"
          >
            Share this quote:
          </span>
          <div className="flex items-center justify-center">
            <a
              href="https://twitter.com/share?text=Can%20you%20legally%20grow%20weed%20in%20New%20Jersey%3F&amp;amp;url=https://rxdco.com/blog/can-you-legally-grow-weed-in-new-jersey"
              className="mx-[8px] flex"
            >
              {twitterIcon}
            </a>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://rxdco.com/blog/can-you-legally-grow-weed-in-new-jersey&amp;title=Can%20you%20legally%20grow%20weed%20in%20New%20Jersey%3F"
              className="mx-[8px] flex"
            >
              {facebookIcon}
            </a>
            <a
              href="https://www.linkedin.com/sharing/share-offsite/?url=https://rxdco.com/blog/can-you-legally-grow-weed-in-new-jersey"
              className="mx-[8px] flex"
            >
              {linkedinIcon}
            </a>
            <a href="/#" className="mx-[8px] flex">
              {linkIcon}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default BlockQuote
