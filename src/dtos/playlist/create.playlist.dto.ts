import { IsString, IsNotEmpty, Length } from 'class-validator'

export class CreatePlaylistDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 35)
  title: string
  
  @Length(0, 255)
  description: string
}