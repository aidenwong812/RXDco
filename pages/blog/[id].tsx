import { BlogProvider } from "../../providers/BlogProvider"
import BlogDetailPage from "../../components/Pages/BlogDetailPage"
import { RequestSampleProvider } from "../../providers/RequestSampleProvider"
import { ContactProvider } from "../../providers/ContactProvider"

const Detail = () => (
  <ContactProvider>
    <RequestSampleProvider>
      <BlogProvider>
        <BlogDetailPage />
      </BlogProvider>
    </RequestSampleProvider>
  </ContactProvider>
)

export default Detail
