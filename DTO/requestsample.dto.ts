import { IsNotEmpty, IsString, IsEmail, IsArray } from "class-validator"

export class RequestSampleDTO {
  @IsString()
  fullname: string

  @IsString()
  company: string

  @IsNotEmpty()
  @IsString()
  companyType: string

  @IsNotEmpty()
  @IsString()
  productType: string

  @IsString()
  orderQuantity: string

  @IsNotEmpty()
  @IsEmail()
  emailAddress: string

  @IsString()
  phoneNumber: string

  @IsString()
  address: string

  @IsString()
  city: string

  @IsString()
  postalCode: string

  @IsString()
  country: string

  @IsString()
  province: string

  @IsArray()
  products: Array<string>

  @IsString()
  other: string

  @IsString()
  sharing: string
}
