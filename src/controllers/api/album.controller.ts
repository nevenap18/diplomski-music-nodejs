import { Controller } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { Album } from "entities/album.entity";
import { AlbumService } from "src/services/album/album.service";

@Controller('api/album')
@Crud({
  model: {
    type: Album
  },
  params: {
    id: {
      field: 'albumId',
      type: 'number',
      primary: true
    }
  },
  query: {
    join: {
      artist: {
        eager: true
      },
      songs: {
        eager: true
      }
    }
  }
})
export class AlbumController {
  constructor(public service: AlbumService) {}
}