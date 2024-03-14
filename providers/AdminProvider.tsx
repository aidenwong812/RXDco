import { createContext, useContext, useMemo, useState } from "react"
import sendContactRequest from "../services/sendContactRequest"
import useRequestAlert from "../hooks/useRequestAlert"

const AdminContext = createContext(undefined)

export const AdminProvider = ({ children }) => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [keepSigned, setKeepSigned] = useState(false)
  const { hasError, setHasError, handleReCaptcha, handleError, handleSuccess } = useRequestAlert()

  const clearValues = () => {
    setUserName("")
    setPassword("")
    setKeepSigned(false)
    handleReCaptcha(false)
  }

  const handleSubmit = async (values) => {
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
      userName,
      setUserName,
      password,
      setPassword,
      keepSigned,
      setKeepSigned,
      handleSubmit,
      handleError,
      hasError,
    }),
    [
      userName,
      setUserName,
      password,
      setPassword,
      keepSigned,
      setKeepSigned,
      handleSubmit,
      handleError,
      hasError,
    ],
  )

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
}

export const useAdmin = () => {
  const context = useContext(AdminContext)
  if (context === undefined) {
    throw new Error("useAdmin must be used within an AdminProvider")
  }
  return context
}
