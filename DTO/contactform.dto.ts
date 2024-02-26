import { IsNotEmpty, IsString, IsEmail } from "class-validator"

export class ContactFormDTO {
  @IsString()
  fullname: string

  @IsString()
  company: string

  @IsNotEmpty()
  @IsEmail()
  emailAddress: string

  @IsString()
  message: string
}
