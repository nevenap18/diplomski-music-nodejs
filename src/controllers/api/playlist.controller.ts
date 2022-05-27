import { Controller, Request, Get, Param, Body, Post, Delete, Put, Patch } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { Playlist } from "entities/playlist.entity";
import { SongPlaylist } from "entities/song-playlist.entity";
import { AddSongPlaylistDto } from "src/dtos/playlist/add-song.playlist.dto";
import { CreatePlaylistDto } from "src/dtos/playlist/create.playlist.dto";
import { EditPlaylistDto } from "src/dtos/playlist/edit.playlist.dto";
import { RemoveSongPlaylistDto } from "src/dtos/playlist/remove-song.playlist.dto";
import { ErrorResponse } from "src/respone/api.response.class";
import { PlaylistService } from "src/services/playlist/playlist.service";

@Controller('api/playlist')
@Crud({
  model: {
    type: Playlist
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
      songPlaylists: {
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
        'createOneBase',
        'getManyBase'
    ]
  }
})
export class PlaylistController {
  constructor(public service: PlaylistService) {}

  @Get(':id')
  getPlaylistById(@Param('id') id: number, @Request() req): Promise<Playlist | ErrorResponse> {
    return this.service.getPlaylistById(req.user.userId, id)
  }

  @Get()
  getAllUserPlaylists(@Request() req): Promise<Playlist[] | null> {
    return this.service.getAllUserPlaylists(req.user.userId)
  }

  @Post()
  addNewPlaylist(@Request() req, @Body() data: CreatePlaylistDto): Promise<Playlist | ErrorResponse> {
    return this.service.createPlaylist(req.user.userId, data)
  }

  @Post('add')
  addSongToPlaylist(@Body() data: AddSongPlaylistDto, @Request() req): Promise<SongPlaylist | ErrorResponse> {
    return this.service.addSongToPlaylist(req.user.userId, data)
  }

  @Put('remove')
  removeSongFromPlaylist(@Body() data: RemoveSongPlaylistDto, @Request() req): Promise<SongPlaylist | ErrorResponse> {
    return this.service.removeSongFromPlaylist(req.user.userId, data)
  }

  @Patch('edit')
  editPlaylist(@Body() data: EditPlaylistDto): Promise<Playlist | ErrorResponse> {
    return this.service.editPlaylist(data)
  }

  @Delete(':id')
  deletePlaylistById(@Param('id') id: number, @Request() req) {
    return this.service.deletePlaylistById(req.user.userId, id)
  }
}
