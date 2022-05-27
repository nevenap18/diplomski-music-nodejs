import { Controller } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { Song } from "entities/song.entity";
import { SongService } from "src/services/song/song.service";

@Controller('api/song')
@Crud({
  model: {
    type: Song
  },
  params: {
    id: {
      field: 'songId',
      type: 'number',
      primary: true
    }
  },
  query: {
    join: {
      album: {
        eager: true
      },
      favoriteSongs: {
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
export class SongController {
  constructor(public service: SongService) {}
}