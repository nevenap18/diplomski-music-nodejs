import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Album } from "entities/album.entity";
import { FavoriteAlbums } from "entities/FavoriteAlbums";
import { FavoriteSongs } from "entities/FavoriteSongs";
import { Playlist } from "entities/playlist.entity";
import { Song } from "entities/song.entity";
import { FavoritesDto } from "src/dtos/favorites/favorites.dto";
import { FavoritesService } from "src/services/favorites/favorites.service";

@Controller('api/favorites')
export class FavoritesController {
  constructor(public service: FavoritesService) {}

  @Get('songs/:id')
  getFavoriteSongsByUserId(@Param('id') userId: number): Promise<Song[] | null> {
    return this.service.getFavoriteSongs(userId)
  }

  @Get('albums/:id')
  getFavoriteAlbumsByUserId(@Param('id') userId: number): Promise<Album[] | null> {
    return this.service.getFavoriteAlbums(userId)
  }

  @Get('playlists/:id')
  getPlaylistsByUserId(@Param('id') userId: number): Promise<Playlist[] | null> {
    return this.service.getPlaylists(userId)
  }

  @Post('song')
  async favoriteSong(@Body() data: FavoritesDto): Promise<FavoriteSongs | null> {
    return this.service.addRemoveFavoriteSong(data)
  }

  @Post('album')
  async favoriteAlbum(@Body() data: FavoritesDto): Promise<FavoriteAlbums | null> {
    return this.service.addRemoveFavoriteAlbum(data)
  }
}