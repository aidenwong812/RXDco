import Link from "next/link"
import Media from "../../shared/Media"
import data from "../../utils/footer.json"
import CTAButton from "../Pages/LandingPage/CTAButton"

const Footer = () => (
  <div className="w-full flex flex-col items-center">
    <div
      className="2xl:w-[1440px] w-[100%] min-h-[96px] 
            flex flex-col 3md:flex-row relative bg-white 
            items-center justify-between px-[72px] 
            py-[32px] md:py-[16px]"
    >
      <div className="flex items-center leading-[1.5] mt-[-7px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/footer_logo.png" width={150} height={32} alt="not found logo" />
      </div>
      <div
        className="flex items-center flex-col sm:flex-row 
      gap-y-[40px] sm:gap-x-[20px] 3lg:gap-x-[40px] px-[20px]
      pt-[54px] pb-[48px] md:py-[48px] 3md:py-0"
      >
        {data.map((item) => (
          <Link href={item.link} key={item.name}>
            <p className="text-black text-[14px] 3lg:text-[16px] font-radikal_light hover:text-brown cursor-pointer transition duration-[300ms]">
              {item.name}
            </p>
          </Link>
        ))}
      </div>
      <CTAButton
        href="/request-a-quote"
        className="!text-[14px] !font-radikal_medium
      !py-[9.6px] !mr-[1px]"
      >
        Request a quote
      </CTAButton>
    </div>
    <div
      className="2xl:w-[1440px] w-[100%] 
      h-[92px] md:h-[40px] bg-black
      flex sm:flex-row flex-col items-start sm:items-center justify-between 
      px-[20px] md:px-[16px] 2md:px-[100px] gap-y-[10px]"
    >
      <p
        className="max-w-[311px] md:max-w-full text-[12px] text-white font-radikal_light
      py-[8px] md:py-0"
      >
        Copyright © 2023 by RXD Co | Privacy Policy | 57 Progress pl, Jackson Township NJ, 08527
      </p>
      <div className="flex items-center gap-x-[10px] pr-[5px] pb-[8px] md:pb-0">
        <p className="text-[12px] text-white font-radikal_light pr-[7px]">Follow us:</p>
        <a href="https://www.linkedin.com/company/11207278/" target="_blank" rel="noreferrer">
          <Media
            type="image"
            link="/images/linkedin.svg"
            blurLink="/images/linkedin.png"
            containerClasses="w-[24px] aspect-[1/1]"
          />
        </a>
        <a href="https://www.instagram.com/rxdco/" target="_blank" rel="noreferrer">
          <Media
            type="image"
            link="/images/instagram.svg"
            blurLink="/images/instagram.png"
            containerClasses="w-[24px] aspect-[1/1]"
          />
        </a>
        <a href="https://twitter.com/rxdco613" target="_blank" rel="noreferrer">
          <Media
            type="image"
            link="/images/twitter.svg"
            blurLink="/images/twitter.png"
            containerClasses="w-[24px] aspect-[1/1]"
          />
        </a>
        <a href="https://www.facebook.com/rxdco613/" target="_blank" rel="noreferrer">
          <Media
            type="image"
            link="/images/facebook.svg"
            blurLink="/images/facebook.png"
            containerClasses="w-[24px] aspect-[1/1]"
          />
        </a>
      </div>
    </div>
  </div>
)

export default Footer
