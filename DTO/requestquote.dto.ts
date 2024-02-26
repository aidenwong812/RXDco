import { IsNotEmpty, IsString, IsEmail, IsArray } from "class-validator"

export class RequestQuoteDTO {
  @IsString()
  fullname: string

  @IsString()
  company: string

  @IsNotEmpty()
  @IsEmail()
  emailAddress: string

  @IsString()
  phoneNumber: string

  @IsArray()
  products: Array<string>

  @IsString()
  other: string
}
