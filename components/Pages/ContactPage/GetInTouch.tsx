import { useContact } from "../../../providers/ContactProvider"
import Form from "../../../shared/Form"
import { validation } from "../../../utils/contact"
import RxdRecaptcha from "../../RxdRecaptcha"
import InputForm from "./InputForm"

const GetInTouch = () => {
  const {
    handleSubmit,
    handleError,
    hasError,
    isSentSuccessful,
    captcha,
    handleReCaptcha,
    isVisibleCaptchaError,
  } = useContact()

  return (
    <Form
      validationSchema={validation}
      onSubmit={handleSubmit}
      onError={handleError}
      className="py-[32px] px-[24px] md:p-[40px] bg-white rounded-[0.5rem]
      shadow-[0_20px_40px_0_rgba(54,54,54,.03)]"
    >
      <p className="font-radikal_light text-[28px] text-black pb-[12px] tracking-[-0.8px]">
        Get in touch
      </p>
      <p className="font-radikal_light text-[14px] md:text-[16px] text-darkgray pb-[24px]">
        Fill in this short form and we’ll get back to you with an estimate:
      </p>
      {hasError && (
        <div
          className="bg-lightred rounded-[0.25rem] text-darkred text-[0.875rem] font-radikal_light
      p-[16px] mb-[16px]"
        >
          Couldn’t save submission due to errors.
        </div>
      )}
      {isSentSuccessful && (
        <div
          className="bg-lightgreen rounded-[0.25rem] text-darkgreen text-[0.875rem] font-radikal_light
        p-[16px] mb-[16px]"
        >
          Thank you for your request, we will get back to you within 24 hours.
        </div>
      )}
      <InputForm />
      <RxdRecaptcha
        hasError={isVisibleCaptchaError && !captcha}
        onChange={handleReCaptcha}
        value={captcha}
      />
      <button
        type="submit"
        className={`px-[30px] py-[10px] text-white bg-black border-[1px] border-black 
        hover:border-blue hover:bg-white hover:text-black
        transition duration-[300ms] rounded-[0.5rem] font-radikal_medium text-[14px]`}
      >
        Send message
      </button>
    </Form>
  )
}

export default GetInTouch
