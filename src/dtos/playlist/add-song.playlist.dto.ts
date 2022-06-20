import { IsNotEmpty, IsNumber } from 'class-validator'
export class AddSongPlaylistDto {
  @IsNotEmpty()
  @IsNumber()
  songId: number

  @IsNotEmpty()
  @IsNumber()
  playlistId: number
}
