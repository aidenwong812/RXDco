import { useRequestSample } from "../../../providers/RequestSampleProvider"
import Input from "../../../shared/Input"
import Select from "../../../shared/Select"
import TextArea from "../../../shared/TextArea/TextArea"
import { orderQuantities } from "../../../utils/request-sample"

const InputForm = () => {
  const {
    fullName,
    setFullName,
    company,
    setCompany,
    companyType,
    setCompanyType,
    productType,
    setProductType,
    orderQuantity,
    setOrderQuantity,
    emailAddress,
    setEmailAddress,
    phoneNumber,
    setPhoneNumber,
    address,
    setAddress,
    city,
    setCity,
    postalCode,
    setPostalCode,
    province,
    setProvince,
    sharing,
    setSharing,
    country,
    setCountry,
    countries,
  } = useRequestSample()
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
        value={companyType}
        onChange={(e) => setCompanyType(e.target.value)}
        label="Company Type"
        id="companyType"
        name="companyType"
        hookToForm
      />
      <Input
        value={productType}
        onChange={(e) => setProductType(e.target.value)}
        label="Product Type"
        id="productType"
        name="productType"
        hookToForm
      />
      <Select
        id="orderquantity"
        name="orderquantity"
        value={orderQuantity || ""}
        onChange={(e) => setOrderQuantity(e.target.value)}
        placeholder="Estimated Order Quantity"
        options={orderQuantities}
      />
      <Input
        value={emailAddress}
        onChange={(e) => setEmailAddress(e.target.value)}
        label="Email Address"
        id="emailAddress"
        name="emailAddress"
        hookToForm
      />
      <div className="md:col-span-2">
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
      <div className="md:col-span-2">
        <Input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          label="Address"
          id="address"
          name="address"
          hookToForm
        />
      </div>
      <Input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        label="City"
        id="city"
        name="city"
        hookToForm
      />
      <Input
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
        label="Zip / Postal Code"
        id="postalCode"
        name="postalCode"
        hookToForm
      />
      <Input
        value={province}
        onChange={(e) => setProvince(e.target.value)}
        label="State / Province"
        id="province"
        name="province"
        hookToForm
      />
      <Select
        id="country"
        name="country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        options={countries}
      />
      <div className="md:col-span-2">
        <TextArea
          value={sharing}
          onChange={(e) => setSharing(e.target.value)}
          label="Anything else you would like to share with us?"
          id="sharing"
          name="sharing"
          rows={5}
          hookToForm
        />
      </div>
    </div>
  )
}

export default InputForm
