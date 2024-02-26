import JoiBase from "joi"

export const validation = JoiBase.object({
  fullname: JoiBase.allow(),
  company: JoiBase.allow(),
  phoneNumber: JoiBase.allow(),
  address: JoiBase.allow(),
  postalCode: JoiBase.allow(),
  province: JoiBase.allow(),
  other: JoiBase.allow(),
  city: JoiBase.allow(),
  sharing: JoiBase.allow(),
  emailAddress: JoiBase.string()
    .email({ tlds: { allow: false } })
    .messages({
      "string.empty": `Please fill out this field.`,
      "string.email": `Please enter a valid email address.`,
    }),
  companyType: JoiBase.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
  productType: JoiBase.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
})

export const orderQuantities = [
  {
    label: "0 ~ 1000",
    value: "0 ~ 1000",
  },
  {
    label: "1,000 ~ 5,000",
    value: "1,000 ~ 5,000",
  },
  {
    label: "5,001 ~ 10,000",
    value: "5,001 ~ 10,000",
  },
  {
    label: "10,001 ~ 25,000",
    value: "10,001 ~ 25,000",
  },
  {
    label: "25,001 - 50,000",
    value: "25,001 - 50,000",
  },
  {
    label: "50,001 - 100,000",
    value: "50,001 - 100,000",
  },
  {
    label: "100,000+",
    value: "100,000+",
  },
]
