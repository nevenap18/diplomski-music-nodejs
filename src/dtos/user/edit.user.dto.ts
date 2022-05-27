import { IsEmail, IsString, IsNotEmpty, Length } from 'class-validator'

export class EditUserDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsString()
  @IsNotEmpty()
  @Length(3, 15)
  username: string
  
  @IsString()
  @Length(0, 255)
  password: string
}