import Input from "../../../shared/Input"
import TextArea from "../../../shared/TextArea"
import { useContact } from "../../../providers/ContactProvider"

const InputForm = () => {
  const {
    fullName,
    setFullName,
    company,
    setCompany,
    emailAddress,
    setEmailAddress,
    message,
    setMessage,
  } = useContact()
  return (
    <div className="w-full flex flex-col gap-y-[30px]">
      <Input
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        label="Full Name"
        id="fullname"
        name="fullname"
        className="border-black"
        hookToForm
      />
      <Input
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        label="Company"
        id="company"
        name="company"
        className="border-black"
        hookToForm
      />
      <Input
        value={emailAddress}
        onChange={(e) => setEmailAddress(e.target.value)}
        label="Email Address"
        id="emailAddress"
        name="emailAddress"
        className="border-black"
        hookToForm
      />
      <TextArea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        label="Message"
        id="message"
        name="message"
        className="border-black"
        rows={3}
        hookToForm
      />
    </div>
  )
}

export default InputForm
