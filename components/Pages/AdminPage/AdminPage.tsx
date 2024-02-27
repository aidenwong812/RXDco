import Image from "next/image"
import SeoHead from "../../SeoHead"
import AdminForm from "./AdminForm"

const AdminPage = () => (
  <>
    <SeoHead
      title="Sign In | RXDco"
      desription="Fill in this short form and we’ll get back to you with an estimate:"
      image="https://rxdcoassets.b-cdn.net/_1200x630_crop_center-center_82_none/Logo.jpg?mtime=1656439237"
    />
    <div className="w-[100%] min-h-screen flex items-center justify-center">
      <div className="w-[300px]">
        <h1 className="mb-[24px]">
          <Image src="/images/logo.svg" width="300" height="64" alt="RXD" />
        </h1>
        <AdminForm />
      </div>
    </div>
  </>
)

export default AdminPage
