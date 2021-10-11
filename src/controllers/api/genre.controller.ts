import { Controller, Get, Param } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { Genre } from "entities/genre.entity";
import { GenreService } from "src/services/genre/genre.service";

@Controller('api/genre')
@Crud({
  model: {
    type: Genre
  },
  params: {
    id: {
      field: 'genreId',
      type: 'number',
      primary: true
    }
  }
})
export class GenreController {
  constructor(public service: GenreService) {}

  @Get(':id')
  getPlaylistById(@Param('id') id: number): Promise<Genre | null> {
    return this.service.getGenreById(id)
  }
}