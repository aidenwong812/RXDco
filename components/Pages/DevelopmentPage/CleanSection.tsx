import Media from "../../../shared/Media"

const CleanSection = () => (
  <div
    className="w-full relative bg-secondarygray
      pt-[100px] px-[16px] md:px-[48px] pt-[85px] md:pt-[144px]"
  >
    <div className="w-full flex justify-center pb-[128px] md:pb-[160px]">
      <div className="relative w-full max-w-[1026px]">
        <Media
          type="image"
          link="https://rxdcoassets.b-cdn.net/RXD-Co-Black-Blue-Clean-Concentrates-Cart-Packaging-RXD-Co-Cart-Packaging-Group-Shot.jpg?fit=crop&width=1026&height=565&fm=jpeg&auto=format 1026w"
          blurLink="https://rxdcoassets.b-cdn.net/RXD-Co-Black-Blue-Clean-Concentrates-Cart-Packaging-RXD-Co-Cart-Packaging-Group-Shot.jpg?fit=crop&width=1026&height=565&fm=jpeg&auto=format 1026w"
          containerClasses="rounded-[12px] overflow-hidden
                w-full aspect-[1/1]
                shadow-[24px_24px_0_0_#fff] md:shadow-[35px_32px_0_0_#fff] z-[10]"
        />
        <div
          className="absolute w-[98px] aspect-[1/1] bg-iblue top-[212px] left-[-47px] rounded-full z-[11]
            hidden md:block"
        />
        <div
          className="absolute md:w-[229px] w-[120px] aspect-[1/1] border border-igray !pointer-events-none
          right-[-60px] bottom-[-52px] md:top-auto md:left-auto md:bottom-[-71px] md:right-[-102px]
            rounded-full z-[11]"
        />
      </div>
    </div>
  </div>
)

export default CleanSection
