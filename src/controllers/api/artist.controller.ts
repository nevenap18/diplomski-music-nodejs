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
      field: 'id',
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
  },
  routes: {
    exclude: [
        'updateOneBase',
        'replaceOneBase',
        'deleteOneBase',
        'createManyBase',
        'createOneBase'
    ]
  }
})
export class ArtistController {
  constructor(public service: ArtistService) {}
}