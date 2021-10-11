import { Controller, Get, Param } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { Playlist } from "entities/playlist.entity";
import { PlaylistService } from "src/services/playlist/playlist.service";

@Controller('api/playlist')
@Crud({
  model: {
    type: Playlist
  },
  params: {
    id: {
      field: 'playlistId',
      type: 'number',
      primary: true
    }
  }
})
export class PlaylistController {
  constructor(public service: PlaylistService) {}

  @Get(':id')
  getPlaylistById(@Param('id') id: number): Promise<Playlist | null> {
    return this.service.getPlaylistById(id)
  }
}