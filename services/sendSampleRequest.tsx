import axios from "axios"
import handleTxError from "../lib/handleTxError"

const sendSampleRequest = async (body) => {
  try {
    const response = await axios.post("/api/requestsample", body)

    return response
  } catch (error) {
    handleTxError(error)
    return { error }
  }
}

export default sendSampleRequest
