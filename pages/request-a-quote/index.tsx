import RequestQuotePage from "../../components/Pages/RequestQuotePage"
import { RequestQuoteProvider } from "../../providers/RequestQuoteProvider"

const RequestSample = () => (
  <RequestQuoteProvider>
    <RequestQuotePage />
  </RequestQuoteProvider>
)

export default RequestSample
