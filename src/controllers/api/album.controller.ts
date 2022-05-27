import { Controller, UseGuards } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { Album } from "entities/album.entity";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { AlbumService } from "src/services/album/album.service";

@UseGuards(JwtAuthGuard)
@Controller('api/album')
@Crud({
  model: {
    type: Album
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
      artist: {
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
export class AlbumController {
  constructor(public service: AlbumService) {}
}