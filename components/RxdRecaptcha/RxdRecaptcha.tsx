import { useEffect, useRef } from "react"
import ReCAPTCHA from "react-google-recaptcha"

const RxdRecaptcha = ({ hasError = false, onChange, value = false }) => {
  const captchaRef = useRef() as any

  useEffect(() => {
    if (!value && captchaRef?.current) captchaRef.current.reset()
  }, [value, captchaRef])

  return (
    <div className="py-[24px]">
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
        onChange={onChange}
        ref={captchaRef}
      />
      {hasError && (
        <p className="font-radikal_light text-[14px] pt-[8px] text-errorred">
          This field is required.
        </p>
      )}
    </div>
  )
}

export default RxdRecaptcha
