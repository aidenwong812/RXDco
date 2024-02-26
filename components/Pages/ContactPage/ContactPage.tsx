import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import Contacts from "./Contacts"
import SubmitSection from "./SubmitSection"

const ContactPage = () => (
  <Layout type="base">
    <SeoHead
      title="Contact | RXDco"
      desription="Fill in this short form and we’ll get back to you with an estimate:"
      image="https://rxdcoassets.b-cdn.net/_1200x630_crop_center-center_82_none/Logo.jpg?mtime=1656439237"
    />
    <div className="shadow-[0_2px_150px_rgba(30,30,30,.19)] 2xl:w-[1440px] w-[100%] overflow-hidden">
      <SubmitSection />
      <Contacts />
    </div>
  </Layout>
)

export default ContactPage
