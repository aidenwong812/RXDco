import Media from "../../../shared/Media"

const Socials = () => (
  <>
    <div className="flex gap-x-[13px] items-center">
      <Media
        type="image"
        link="/images/contact_instagram.svg"
        blurLink="/images/contact_instagram.png"
        containerClasses="w-[24px] aspect-[1/1]"
      />
      <a href="https://www.instagram.com/rxdco/" target="_blank" rel="noreferrer">
        <p className="text-[16px] font-radikal_light text-black hover:text-[#99245e]">Instagram</p>
      </a>
    </div>
    <div className="flex gap-x-[13px] items-center pt-[12px]">
      <Media
        type="image"
        link="/images/contact_linkedin.svg"
        blurLink="/images/contact_linkedin.png"
        containerClasses="w-[24px] aspect-[1/1]"
      />
      <a href="https://www.linkedin.com/company/11207278" target="_blank" rel="noreferrer">
        <p className="text-[16px] font-radikal_light text-black hover:text-[#99245e]">LinkedIn</p>
      </a>
    </div>
    <div className="flex gap-x-[13px] items-center pt-[12px]">
      <Media
        type="image"
        link="/images/contact_twitter.svg"
        blurLink="/images/contact_twitter.png"
        containerClasses="w-[24px] aspect-[1/1]"
      />
      <a href="https://twitter.com/rxdco613" target="_blank" rel="noreferrer">
        <p className="text-[16px] font-radikal_light text-black hover:text-[#99245e]">Twitter</p>
      </a>
    </div>
    <div className="flex gap-x-[13px] items-center pt-[12px]">
      <Media
        type="image"
        link="/images/contact_facebook.svg"
        blurLink="/images/contact_facebook.png"
        containerClasses="w-[24px] aspect-[1/1]"
      />
      <a href="https://www.facebook.com/rxdco613/" target="_blank" rel="noreferrer">
        <p className="text-[16px] font-radikal_light text-black hover:text-[#99245e]">Facebook</p>
      </a>
    </div>
  </>
)

export default Socials
