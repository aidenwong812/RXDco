import ContactPage from "../../components/Pages/ContactPage"
import { ContactProvider } from "../../providers/ContactProvider"

const Contact = () => (
  <ContactProvider>
    <ContactPage />
  </ContactProvider>
)

export default Contact
