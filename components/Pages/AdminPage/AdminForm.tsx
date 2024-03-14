import { useAdmin } from "@/providers/AdminProvider"
import Form from "@/shared/Form"
import { validation } from "@/utils/admin"
import InputForm from "./InputForm"

const AdminForm = () => {
  const { handleSubmit, handleError, hasError } = useAdmin()

  return (
    <Form
      validationSchema={validation}
      onSubmit={handleSubmit}
      onError={handleError}
      className="flex flex-col"
    >
      {hasError && (
        <div
          className="bg-lightred rounded-[0.25rem] text-darkred text-[0.875rem] font-radikal_light
      p-[16px] mb-[16px]"
        >
          Couldn’t Sign In due to errors.
        </div>
      )}
      <InputForm />

      <button
        type="submit"
        className={`px-[30px] py-[10px] text-white bg-[#e12d39] hover:bg-[#d61f2b]
        transition duration-[300ms] rounded-[0.5rem] font-radikal_medium text-[14px] mt-[24px] mb-[8px]`}
      >
        Sign in
      </button>
      <button type="submit" className="hover:text-[#1f5fea] text-[11px]">
        Forgot your password?
      </button>
    </Form>
  )
}

export default AdminForm
