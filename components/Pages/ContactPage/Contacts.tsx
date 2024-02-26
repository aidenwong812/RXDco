import Media from "../../../shared/Media"
import Socials from "./Socials"

const Contacts = () => (
  <div
    className="w-full pt-[60px] pb-[45px] md:pb-[70px] px-[16px] md:px-[100px] 
    bg-lightgray flex md:flex-row flex-col gap-y-[30px] md:gap-x-[35px] md:items-stretch"
  >
    <div
      className="bg-white rounded-[0.8rem] p-[32px] w-full md:max-w-[354px]
    shadow-[0_20px_40px_0_rgba(54,54,54,.03)]"
    >
      <p className="pb-[32px] text-[20px] font-radikal_light text-black">Visit our headquarters:</p>
      <div className="flex gap-x-[13px] items-center">
        <Media
          type="image"
          link="/images/location.svg"
          blurLink="/images/location.png"
          containerClasses="w-[18px] aspect-[18/26]"
        />
        <p className="text-[16px] font-radikal_light text-black">
          57 Progress Place - Unit 1 <br /> Jackson Township, NJ, 08527
        </p>
      </div>
    </div>
    <div
      className="bg-white rounded-[0.8rem] p-[32px] 
    w-full md:max-w-[212px] shadow-[0_20px_40px_0_rgba(54,54,54,.03)]"
    >
      <p className="pb-[32px] text-[20px] font-radikal_light text-black">Call us:</p>
      <div className="flex gap-x-[13px] items-center">
        <Media
          type="image"
          link="/images/phone.svg"
          blurLink="/images/phone.png"
          containerClasses="w-[14px] aspect-[14/22]"
        />
        <a href="tel:7322766160">
          <p className="text-[16px] font-radikal_light text-black hover:text-[#99245e]">
            736-276-6160
          </p>
        </a>
      </div>
    </div>
    <div
      className="bg-white rounded-[0.8rem] p-[32px] 
    w-full md:max-w-[354px] shadow-[0_20px_40px_0_rgba(54,54,54,.03)]"
    >
      <p className="pb-[32px] text-[20px] font-radikal_light text-black">Send us an email:</p>
      <div className="flex gap-x-[13px] items-center">
        <Media
          type="image"
          link="/images/mail.svg"
          blurLink="/images/mail.png"
          containerClasses="w-[22px] aspect-[22/16]"
        />
        <a href="mailto:info@rxdco.com" target="_blank" rel="noreferrer">
          <p className="text-[16px] font-radikal_light text-black hover:text-[#99245e]">
            info@rxdco.com
          </p>
        </a>
      </div>
      <p className="pt-[16px] text-darkgray font-radikal_light text-[14px]">
        One of our experienced sales reps will get back to you shortly
      </p>
    </div>
    <div
      className="bg-white rounded-[0.8rem] p-[32px] 
    w-full md:max-w-[212px] shadow-[0_20px_40px_0_rgba(54,54,54,.03)]"
    >
      <p className="pb-[32px] text-[20px] font-radikal_light text-black">Follow us:</p>
      <Socials />
    </div>
  </div>
)

export default Contacts
