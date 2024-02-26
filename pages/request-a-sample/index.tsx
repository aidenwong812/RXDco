import RequestSamplePage from "../../components/Pages/RequestSamplePage"
import { RequestSampleProvider } from "../../providers/RequestSampleProvider"

const RequestSample = () => (
  <RequestSampleProvider>
    <RequestSamplePage />
  </RequestSampleProvider>
)

export default RequestSample
