import { IsEmail, IsString, IsNotEmpty, MinLength, Length } from 'class-validator'

export class AddUserDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string
  
  @IsString()
  @IsNotEmpty()
  @Length(3, 15)
  username: string

  @IsString()
  @IsNotEmpty()
  @Length(8, 255)
  password: string
}