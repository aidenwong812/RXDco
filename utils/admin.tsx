import JoiBase from "joi"

export const validation = JoiBase.object({
  userName: JoiBase.allow(),
  password: JoiBase.allow(),
  keepSigned: JoiBase.allow(),
})
