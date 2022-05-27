import { Body, Request, Controller, Get, Param, Post } from "@nestjs/common";
import { Album } from "entities/album.entity";
import { FavoriteAlbums } from "entities/FavoriteAlbums";
import { FavoriteSongs } from "entities/FavoriteSongs";
import { Song } from "entities/song.entity";
import { FavoritesDto } from "src/dtos/favorites/favorites.dto";
import { ErrorResponse } from "src/respone/api.response.class";
import { FavoritesService } from "src/services/favorites/favorites.service";

@Controller('api/favorites')
export class FavoritesController {
  constructor(public service: FavoritesService) {}

  @Get('songs')
  getFavoriteSongsByUserId(@Request() req): Promise<Song[]> {
    return this.service.getFavoriteSongs(req.user.userId)
  }

  @Get('albums')
  getFavoriteAlbumsByUserId(@Request() req): Promise<Album[]> {
    return this.service.getFavoriteAlbums(req.user.userId)
  }

  @Post('song')
  async favoriteSong(@Request() req, @Body() data: FavoritesDto): Promise<FavoriteSongs | ErrorResponse> {
    return this.service.addRemoveFavoriteSong(req.user.userId, data)
  }

  @Post('album')
  async favoriteAlbum(@Request() req, @Body() data: FavoritesDto): Promise<FavoriteAlbums | ErrorResponse> {
    return this.service.addRemoveFavoriteAlbum(req.user.userId, data)
  }
}