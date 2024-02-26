import { createContext, useContext, useMemo, useState } from "react"
import sendQuoteRequest from "../services/sendQuoteRequest"
import data from "../utils/interest-products.json"
import useRequestAlert from "../hooks/useRequestAlert"

const RequestQuoteContext = createContext(undefined)

export const RequestQuoteProvider = ({ children }) => {
  const [fullName, setFullName] = useState("")
  const [company, setCompany] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [other, setOther] = useState("")
  const [selectedProducts, setSelectedProducts] = useState([])
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
    setPhoneNumber("")
    setOther("")
    setSelectedProducts([])
    handleReCaptcha(false)
  }

  const products = useMemo(() => {
    return data.reduce((acc, obj) => {
      if (selectedProducts.includes(obj.id)) {
        acc.push(obj.name)
      }
      return acc
    }, [])
  }, [selectedProducts])

  const handleSubmit = async (values) => {
    setIsSentSuccessful(false)
    if (!captcha) {
      setHasError(true)
      setIsVisibleCaptchError(true)
      return
    }

    setHasError(false)
    const response: any = await sendQuoteRequest({
      ...values,
      products,
    })
    if (response?.error) {
      handleError()
      return
    }
    handleSuccess()
    clearValues()
  }

  const handleSelectProduct = (id) => {
    let temp = [...selectedProducts]

    const findIndex = selectedProducts.indexOf(id) + 1

    if (findIndex) {
      temp.splice(findIndex - 1, 1)
      setSelectedProducts([...temp])
      return
    }

    temp.push(id)
    setSelectedProducts(temp)
  }

  const value = useMemo(
    () => ({
      fullName,
      setFullName,
      company,
      setCompany,
      emailAddress,
      setEmailAddress,
      phoneNumber,
      setPhoneNumber,
      other,
      setOther,
      selectedProducts,
      handleSelectProduct,
      captcha,
      handleReCaptcha,
      handleSubmit,
      handleError,
      hasError,
      isSentSuccessful,
      isVisibleCaptchaError,
    }),
    [
      fullName,
      setFullName,
      company,
      setCompany,
      emailAddress,
      setEmailAddress,
      phoneNumber,
      setPhoneNumber,
      other,
      setOther,
      selectedProducts,
      handleSelectProduct,
      captcha,
      handleReCaptcha,
      handleSubmit,
      handleError,
      hasError,
      isSentSuccessful,
      isVisibleCaptchaError,
    ],
  )

  return <RequestQuoteContext.Provider value={value}>{children}</RequestQuoteContext.Provider>
}

export const useRequestQuote = () => {
  const context = useContext(RequestQuoteContext)
  if (context === undefined) {
    throw new Error("useRequestQuote must be used within an RequestQuoteProvider")
  }
  return context
}
