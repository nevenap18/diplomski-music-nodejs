import { IsString, IsNotEmpty, Length, IsIn } from 'class-validator'

export class SearchDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 35)
  keywords: string
  
  @IsNotEmpty()
  @IsString()
  @IsIn(['artists', 'albums', 'songs'])
  searchBy: 'artists' | 'albums' | 'songs'
}