import Link from "next/link"
import UpCannabisSlides from "./UpCannabisSlides"
import useMedia from "../../hooks/useMedia"

const UpCannabis = ({ className = "" }) => {
  const isNoteBook = useMedia(1024)
  const isSamsungS8 = useMedia(360)
  return (
    <div
      className={`w-full flex flex-col lg:flex-row bg-secondarygray 
      md:pb-[200px] md:pt-[130px] pt-[50px] pb-[40px]
      px-0 md:px-[48px] relative ${className}`}
    >
      <div className="w-full lg:w-[250px] xl:w-[320px] px-[18px] md:pl-[48px] md:pr-[4px]">
        <p
          className="text-center lg:text-left text-[30px] md:text-[3rem] font-radikal_light 
        leading-[110%] md:leading-[3.625rem]"
        >
          {/* eslint-disable-next-line no-nested-ternary */}
          {isNoteBook ? (
            isSamsungS8 ? (
              <>
                Up your <br /> cannabis <br /> packaging game
              </>
            ) : (
              <>
                Up your cannabis <br /> packaging game
              </>
            )
          ) : (
            <>
              Up your <br />
              cannabis <br />
              packaging <br />
              game
            </>
          )}
        </p>
        <p className="text-center lg:text-left pt-[16px] md:pt-[40px] pb-[24px] text-[16px] font-radikal_light">
          {/* eslint-disable-next-line no-nested-ternary */}
          {isNoteBook ? (
            <>Our compliance packaging is designed to keep you at the forefront of your industry.</>
          ) : (
            <>
              Our compliance packaging
              <br />
              is designed to keep you at
              <br />
              the forefront of your
              <br />
              industry.
            </>
          )}
        </p>
        {!isNoteBook && (
          <Link href="services/custom-cannabis-packaging">
            <span
              className="border-b-[2px] border-b-[#67daa0] text-[16px] font-radikal_medium text-black cursor-pointer relative
                          hover:after:translate-x-[20px]
                          after:content-[''] after:w-[2.5rem] after:h-[1.5rem] after:absolute after:translate-x-[10px] after:bottom-[-0.6rem] 
                          after:bg-[url('/images/arrow-forward.svg')] after:transition after:duration-[300ms] after:bg-no-repeat"
            >
              Custom Cannabis Packaging <br /> Options
            </span>
          </Link>
        )}
      </div>
      <div className="w-full h-auto md:w-[75%] overflow-hidden">
        <UpCannabisSlides />
      </div>
      {isNoteBook && (
        <Link href="services/custom-cannabis-packaging">
          <span
            className="border-b-[2px] border-b-[#67daa0] text-[16px] 
            font-radikal_medium leading-[110%]
            text-black cursor-pointer relative w-fit self-center
            hover:after:translate-x-[20px] pt-[30px]
            after:content-[''] after:w-[2.5rem] after:h-[1.5rem] 
            after:absolute after:translate-x-[10px] after:bottom-[-0.7rem] 
            after:bg-[url('/images/arrow-forward.svg')] after:transition 
            after:duration-[300ms] after:bg-no-repeat"
          >
            Custom Cannabis Packaging Options
          </span>
        </Link>
      )}
    </div>
  )
}

export default UpCannabis
