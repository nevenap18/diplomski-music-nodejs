import { Controller } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { Artist } from "entities/artist.entity";
import { ArtistService } from "src/services/artist/artist.service";

@Controller('api/artist')
@Crud({
  model: {
    type: Artist
  },
  params: {
    id: {
      field: 'artistId',
      type: 'number',
      primary: true
    }
  },
  query: {
    join: {
      albums: {
        eager: true
      },
      songs: {
        eager: true
      }
    }
  }
})
export class ArtistController {
  constructor(public service: ArtistService) {}
}