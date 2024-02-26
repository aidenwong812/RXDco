import { createContext, useContext, useMemo, useState } from "react"
import countryList from "react-select-country-list"
import sendSampleRequest from "../services/sendSampleRequest"
import data from "../utils/interest-products.json"
import useRequestAlert from "../hooks/useRequestAlert"

const RequestSampleContext = createContext(undefined)

export const RequestSampleProvider = ({ children }) => {
  const [fullName, setFullName] = useState("")
  const [company, setCompany] = useState("")
  const [companyType, setCompanyType] = useState("")
  const [productType, setProductType] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [province, setProvince] = useState("")
  const [other, setOther] = useState("")
  const [country, setCountry] = useState("US")
  const [orderQuantity, setOrderQuantity] = useState(null)
  const [selectedProducts, setSelectedProducts] = useState([])
  const [sharing, setSharing] = useState("")
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
    setCompanyType("")
    setProductType("")
    setEmailAddress("")
    setPhoneNumber("")
    setAddress("")
    setCity("")
    setPostalCode("")
    setProvince("")
    setOther("")
    setCountry("US")
    setOrderQuantity(null)
    setSelectedProducts([])
    setSharing("")
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
    const response: any = await sendSampleRequest({
      ...values,
      orderQuantity,
      products,
      country: countries.find((item) => item.value === country).label,
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

  const countries = useMemo(() => countryList().getData(), [])

  const value = useMemo(
    () => ({
      fullName,
      setFullName,
      company,
      setCompany,
      companyType,
      setCompanyType,
      productType,
      setProductType,
      orderQuantity,
      setOrderQuantity,
      emailAddress,
      setEmailAddress,
      phoneNumber,
      setPhoneNumber,
      address,
      setAddress,
      city,
      setCity,
      postalCode,
      setPostalCode,
      province,
      setProvince,
      other,
      setOther,
      country,
      setCountry,
      countries,
      selectedProducts,
      handleSelectProduct,
      captcha,
      handleReCaptcha,
      handleSubmit,
      sharing,
      setSharing,
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
      companyType,
      setCompanyType,
      productType,
      setProductType,
      orderQuantity,
      setOrderQuantity,
      emailAddress,
      setEmailAddress,
      phoneNumber,
      setPhoneNumber,
      address,
      setAddress,
      city,
      setCity,
      postalCode,
      setPostalCode,
      province,
      setProvince,
      other,
      setOther,
      country,
      setCountry,
      countries,
      selectedProducts,
      handleSelectProduct,
      captcha,
      handleReCaptcha,
      handleSubmit,
      sharing,
      setSharing,
      handleError,
      hasError,
      isVisibleCaptchaError,
      isSentSuccessful,
    ],
  )

  return <RequestSampleContext.Provider value={value}>{children}</RequestSampleContext.Provider>
}

export const useRequestSample = () => {
  const context = useContext(RequestSampleContext)
  if (context === undefined) {
    throw new Error("useRequestSample must be used within an RequestSampleProvider")
  }
  return context
}
