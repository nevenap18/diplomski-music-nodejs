import { IsNotEmpty, IsNumber } from 'class-validator'

export class RemoveSongPlaylistDto {
  @IsNotEmpty()
  @IsNumber()
  songId: number

  @IsNotEmpty()
  @IsNumber()
  playlistId: number
}