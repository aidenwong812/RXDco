import { useState } from "react"

const useRequestAlert = () => {
  const [isSentSuccessful, setIsSentSuccessful] = useState(false)
  const [isVisibleCaptchaError, setIsVisibleCaptchError] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [captcha, setCaptcha] = useState(false)

  const handleReCaptcha = (value) => {
    if (value) setIsVisibleCaptchError(false)
    setCaptcha(value)
  }

  const handleError = () => {
    setIsVisibleCaptchError(false)
    setIsSentSuccessful(false)
    setHasError(true)
  }

  const handleSuccess = () => {
    setIsSentSuccessful(true)
  }

  return {
    isSentSuccessful,
    setIsSentSuccessful,
    isVisibleCaptchaError,
    setIsVisibleCaptchError,
    hasError,
    setHasError,
    captcha,
    setCaptcha,
    handleReCaptcha,
    handleError,
    handleSuccess,
  }
}

export default useRequestAlert
