import ShareButtons from "./ShareButtons"

const DetailFooter = () => (
  <div
    className="flex md:justify-between md:items-center 
          flex-col md:flex-row pt-[40px] w-full
          border-t border-t-mediumgray"
  >
    <p
      className="font-[300] leading-[1.5] 
              text-darkgray mr-[0.5rem] text-radikal_light font-normal
            font-radikal_light pt-[6px]"
    >
      Did you find this article helpful?
    </p>
    <div>
      <div className="flex items-center  pt-[6px]">
        <span
          className="font-[300] leading-[1.5] 
              text-darkgray mr-[0.5rem] text-radikal_light font-normal
            font-radikal_light"
        >
          Share it with your peers:
        </span>
        <div className="flex items-center justify-center">
          <ShareButtons />
        </div>
      </div>
    </div>
  </div>
)

export default DetailFooter
