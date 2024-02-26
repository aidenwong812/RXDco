import { createContext, useContext, useMemo, useState } from "react"
import sendContactRequest from "../services/sendContactRequest"
import useRequestAlert from "../hooks/useRequestAlert"

const ContactContext = createContext(undefined)

export const ContactProvider = ({ children }) => {
  const [fullName, setFullName] = useState("")
  const [company, setCompany] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [message, setMessage] = useState("")
  const {
    isSentSuccessful,
    setIsSentSuccessful,
    isVisibleCaptchaError,
    setIsVisibleCaptchError,
    hasError,
    setHasError,
    captcha,
    handleReCaptcha,
    handleError,
    handleSuccess,
  } = useRequestAlert()

  const clearValues = () => {
    setFullName("")
    setCompany("")
    setEmailAddress("")
    setMessage("")
    handleReCaptcha(false)
  }

  const handleSubmit = async (values) => {
    setIsSentSuccessful(false)
    if (!captcha) {
      setHasError(true)
      setIsVisibleCaptchError(true)
      return
    }

    setHasError(false)
    const response: any = await sendContactRequest(values)
    if (response?.error) {
      handleError()
      return
    }
    handleSuccess()
    clearValues()
  }

  const value = useMemo(
    () => ({
      fullName,
      setFullName,
      company,
      setCompany,
      emailAddress,
      setEmailAddress,
      captcha,
      handleReCaptcha,
      handleSubmit,
      handleError,
      hasError,
      isSentSuccessful,
      message,
      setMessage,
      isVisibleCaptchaError,
    }),
    [
      fullName,
      setFullName,
      company,
      setCompany,
      emailAddress,
      setEmailAddress,
      captcha,
      handleReCaptcha,
      handleSubmit,
      handleError,
      hasError,
      isSentSuccessful,
      message,
      setMessage,
      isVisibleCaptchaError,
    ],
  )

  return <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
}

export const useContact = () => {
  const context = useContext(ContactContext)
  if (context === undefined) {
    throw new Error("useContact must be used within an ContactProvider")
  }
  return context
}
