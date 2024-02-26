import axios from "axios"
import handleTxError from "../lib/handleTxError"

const sendContactRequest = async ({ fullname, company, emailAddress, message }) => {
  try {
    const response = await axios.post("/api/contact", {
      fullname,
      company,
      emailAddress,
      message,
    })

    return response
  } catch (error) {
    handleTxError(error)
    return { error }
  }
}

export default sendContactRequest
