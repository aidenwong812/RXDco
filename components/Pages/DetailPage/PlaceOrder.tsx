import CTAButton from "../LandingPage/CTAButton"

const PlaceOrder = () => (
  <div
    className="max-w-[496px] bg-[url('/images/detail_background.svg')]
        bg-[left_top] pt-[50px] px-[32px] md:px-[50px] 
        flex flex-col items-center rounded-[1em]"
  >
    <p
      className="font-radikal_light text-[28px] md:text-[32px] pb-[24px] 
    font-[400] text-white tracking-[-0.67px] leading-[2.125rem]"
    >
      Place your order
    </p>
    <p
      className="pb-[24px] font-radikal_light text-[16px] text-white 
    font-[300] text-center"
    >
      {`Order now and we'll have your packaging with you in no time.`}
    </p>
    <CTAButton
      href="/request-a-quote"
      className="!px-[31px] !pt-[11px] !pb-[10px] !text-[14px] !border-none !text-blue
            !bg-white hover:!text-white hover:!bg-blue font-radikal_medium"
    >
      Request a quote
    </CTAButton>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="https://rxdcoassets.b-cdn.net/Request-Quote-Animation_2022-08-10-160351_oovs.png?fit=crop&width=445&height=370"
      className="w-full 2lg:w-[396px] aspect-[1/1] mt-[3em]"
      alt="not found assets"
    />
  </div>
)

export default PlaceOrder
