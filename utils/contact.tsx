import JoiBase from "joi"

export const validation = JoiBase.object({
  fullname: JoiBase.allow(),
  company: JoiBase.allow(),
  message: JoiBase.allow(),
  emailAddress: JoiBase.string()
    .email({ tlds: { allow: false } })
    .messages({
      "string.empty": `Please fill out this field.`,
      "string.email": `Please enter a valid email address.`,
    }),
})
