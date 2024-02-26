import useShareLink from "../../../hooks/useShareLink"
import { useBlog } from "../../../providers/BlogProvider"
import { twitterIcon } from "../../../utils/twitter-icon"
import { facebookIcon } from "../../../utils/facebook-icon"
import { linkedinIcon } from "../../../utils/linkedin-icon"
import { linkIcon } from "../../../utils/link-icon"
import Tooltip from "../../../shared/Tooltip"
import copyToClipboard from "../../../lib/copyToClipboard"

const ShareButtons = () => {
  const { shareLink } = useShareLink()
  const { details } = useBlog()
  return (
    <>
      <button
        type="button"
        onClick={() =>
          shareLink(
            `https://twitter.com/share?text=${details.title}&&url=${
              typeof window !== undefined ? window.origin : ""
            }/blog/${details.id}`,
          )
        }
        className="mx-[8px] flex hover:text-yellow"
      >
        {twitterIcon}
      </button>
      <button
        type="button"
        onClick={() =>
          shareLink(
            `https://www.facebook.com/sharer/sharer.php?u=${
              typeof window !== undefined ? window.origin : ""
            }/blog/${details.id}&title=${details.title}`,
          )
        }
        className="mx-[8px] flex hover:text-yellow"
      >
        {facebookIcon}
      </button>
      <button
        type="button"
        onClick={() =>
          shareLink(
            `https://www.linkedin.com/sharing/share-offsite/?url=${
              typeof window !== undefined ? window.origin : ""
            }/blog/${details.id}`,
          )
        }
        className="mx-[8px] flex hover:text-yellow"
      >
        {linkedinIcon}
      </button>
      <Tooltip id="copy-link" message="Copied to clipboard!" tipClasses="!mt-[7px] !mx-[5px]">
        <button
          type="button"
          className="mx-[8px] flex hover:text-yellow"
          onClick={() =>
            copyToClipboard(
              `${typeof window !== undefined ? window.origin : ""}/blog/${details.id}`,
            )
          }
        >
          {linkIcon}
        </button>
      </Tooltip>
    </>
  )
}

export default ShareButtons
