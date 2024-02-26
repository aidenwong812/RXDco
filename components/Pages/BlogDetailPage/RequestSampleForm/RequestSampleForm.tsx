import InputForm from "./InputForm"
import SelectProducts from "./SelectProducts"
import Form from "../../../../shared/Form"
import { validation } from "../../../../utils/request-sample"
import RxdRecaptcha from "../../../RxdRecaptcha"
import { useRequestSample } from "../../../../providers/RequestSampleProvider"
import Input from "../../../../shared/Input"

const RequestSampleForm = () => {
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
  } = useRequestSample()

  return (
    <Form
      className="md:border border-mediumgray md:p-[48px_64px_40px] rounded-[24px]"
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
        className="text-[32px] md:text-[3rem] font-radikal_light
        pb-[16px] md:pb-0 tracking-[-0.8px] !text-lightblack"
      >
        Request a sample
      </p>
      <p className="text-[16px] font-radikal_light !text-lightblack mb-[1.5rem]">
        Fill in this short form to request a sample of our products:
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
        className={`w-full md:w-auto px-[30px] py-[10px] text-white bg-black border-[1px] hover:border-blue hover:bg-white hover:text-blue
          transition duration-[300ms] rounded-[0.5rem] font-radikal_light text-[14px]`}
      >
        Send request
      </button>
    </Form>
  )
}

export default RequestSampleForm
