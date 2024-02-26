import DetailPage from "../../components/Pages/DetailPage"
import { DetailProvider } from "../../providers/DetailProvider"

const Detail = () => (
  <DetailProvider>
    <DetailPage />
  </DetailProvider>
)

export default Detail
