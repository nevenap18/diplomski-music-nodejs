import { IsBoolean, IsNumber, IsNotEmpty } from 'class-validator'
export class FavoritesDto {
  @IsNotEmpty()
  @IsNumber()
  favId: number
  
  @IsNotEmpty()
  @IsBoolean()
  value: boolean
}