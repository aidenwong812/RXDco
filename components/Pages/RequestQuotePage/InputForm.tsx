import Input from "../../../shared/Input"
import { useRequestQuote } from "../../../providers/RequestQuoteProvider"

const InputForm = () => {
  const {
    fullName,
    setFullName,
    company,
    setCompany,
    emailAddress,
    setEmailAddress,
    phoneNumber,
    setPhoneNumber,
  } = useRequestQuote()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
      <Input
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        label="Full Name"
        id="fullname"
        name="fullname"
        hookToForm
      />
      <Input
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        label="Company"
        id="company"
        name="company"
        hookToForm
      />
      <Input
        value={emailAddress}
        onChange={(e) => setEmailAddress(e.target.value)}
        label="Email Address"
        id="emailAddress"
        name="emailAddress"
        hookToForm
      />
      <Input
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        label="Phone Number"
        placeholder="Phone Number (optional)"
        id="phoneNumber"
        name="phoneNumber"
        hookToForm
      />
    </div>
  )
}

export default InputForm
