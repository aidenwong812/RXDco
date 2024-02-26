import Input from "../../../shared/Input"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import InputForm from "./InputForm"
import SelectProducts from "./SelectProducts"
import Media from "../../../shared/Media"
import Form from "../../../shared/Form"
import { validation } from "../../../utils/request-quote"
import { useRequestQuote } from "../../../providers/RequestQuoteProvider"
import RxdRecaptcha from "../../RxdRecaptcha"

const RequestQuotePage = () => {
  const {
    other,
    setOther,
    handleReCaptcha,
    handleSubmit,
    handleError,
    hasError,
    isSentSuccessful,
    captcha,
    isVisibleCaptchaError,
  } = useRequestQuote()

  return (
    <Layout type="single">
      <Media
        type="image"
        link="/images/sample_curve.png"
        blurLink="/images/sample_curve.png"
        containerClasses="w-full aspect-[1440/573] !absolute z-[4] top-[260px] left-0
        hidden md:block"
      />
      <Media
        type="image"
        link="/images/sample_curve.png"
        blurLink="/images/sample_curve.png"
        containerClasses="w-full aspect-[1440/573] !absolute z-[4] bottom-0 left-0
        hidden md:block"
      />
      <SeoHead
        title="Request a quote | RXDco"
        desription="We are a family-owned custom packaging solutions provider with over 100 years in the packaging industry, servicing the cannabis industry."
        image="https://rxdcoassets.b-cdn.net/_1200x630_crop_center-center_82_none/RXD-Co-Cannalit-Cannabis-Infused-Gummies_2022-07-06-202218_wipd.jpg?mtime=1657138939"
      />
      <Form
        className="px-[16px] py-[44px] md:px-[100px] md:py-[80px] 
        rounded-[24px] bg-lightgray mt-[24px]
        relative z-[5]"
        onSubmit={handleSubmit}
        onError={handleError}
        validationSchema={validation}
      >
        {hasError && (
          <div
            className="bg-lightred rounded-[0.25rem] text-darkred text-[0.875rem] font-radikal_light
        p-[16px] mb-[16px]"
          >
            Couldn’t save submission due to errors.
          </div>
        )}
        <p
          className="text-[32px] md:text-[40px] font-radikal_light text-lightblack text-center
        pb-[20px] md:pb-0 tracking-[-0.8px] leading-[150%]"
        >
          Request a quote
        </p>
        <p className="px-[12px] md:px-0 text-[16px] font-radikal_light text-darkgray pb-[48px] text-center">
          Fill in this short form and we’ll get back to you with an estimate:
        </p>
        <InputForm />
        <SelectProducts />
        <Input
          value={other}
          onChange={(e) => setOther(e.target.value)}
          label="Other (optional)"
          id="other"
          name="other"
          hookToForm
        />
        <RxdRecaptcha
          hasError={isVisibleCaptchaError && !captcha}
          onChange={handleReCaptcha}
          value={captcha}
        />
        {isSentSuccessful && (
          <div
            className="bg-green rounded-[0.25rem] text-white text-[0.875rem] font-radikal_light
        p-[16px] mb-[16px]"
          >
            Thank you for your request, we will get back to you within 24 hours.
          </div>
        )}
        <button
          type="submit"
          className={`w-full md:w-auto px-[30px] py-[10px] text-white bg-blue border-[1px] border-blue hover:bg-white hover:text-blue
          transition duration-[300ms] rounded-[0.5rem] font-radikal_medium text-[14px]`}
        >
          Send request
        </button>
      </Form>
    </Layout>
  )
}

export default RequestQuotePage
