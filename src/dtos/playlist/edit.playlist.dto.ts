import { IsString, IsNotEmpty, IsNumber, Length } from 'class-validator'
export class EditPlaylistDto {
  @IsNumber()
  @IsNotEmpty()
  playlistId: number
  
  @IsNotEmpty()
  @IsString()
  @Length(1, 35)
  title: string

  @IsString()
  @Length(0, 255)
  description: string
}