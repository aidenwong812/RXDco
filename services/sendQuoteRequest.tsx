import axios from "axios"
import handleTxError from "../lib/handleTxError"

const sendQuoteRequest = async (body) => {
  try {
    const response = await axios.post("/api/requestquote", body)

    return response
  } catch (error) {
    handleTxError(error)
    return { error }
  }
}

export default sendQuoteRequest
