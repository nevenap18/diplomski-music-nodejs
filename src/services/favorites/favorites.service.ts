import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { FavoriteAlbums } from 'entities/FavoriteAlbums'
import { FavoriteSongs } from 'entities/FavoriteSongs'
import { FavoritesDto } from 'src/dtos/favorites/favorites.dto'
import { User } from 'entities/user.entity'
import { Song } from 'entities/song.entity'
import { Album } from 'entities/album.entity'
import { ErrorResponse } from 'src/respone/api.response.class'


@Injectable()
export class FavoritesService {
  constructor(
    @InjectRepository(FavoriteAlbums)
    private readonly favoriteAlbums: Repository<FavoriteAlbums>,
    @InjectRepository(FavoriteSongs)
    private readonly favoriteSongs: Repository<FavoriteSongs>,
    @InjectRepository(User)
    private readonly user: Repository<User>
  ) {}

  async getFavoriteSongs(userId: number): Promise<Song[]> {
    const user = await this.user.findOne({
      where: {
          userId
      },
      join: {
          alias: 'user',
          leftJoinAndSelect: {
              'songs': 'user.songs',
              'artist': 'songs.artist'
          }
      }
    })
    
    return user.songs
  }

  async getFavoriteAlbums(userId: number): Promise<Album[]> {
    const user = await this.user.findOne({
      where: {
          userId
      },
      join: {
          alias: 'user',
          leftJoinAndSelect: {
              'albums': 'user.albums',
              'artist': 'albums.artist'
          }
      }
    })
    
    return user.albums
  }

  async addRemoveFavoriteAlbum(userId: number, data: FavoritesDto): Promise<FavoriteAlbums | ErrorResponse> {

    if (data.value) {
      const newFavoriteAlbum: FavoriteAlbums = new FavoriteAlbums()
      newFavoriteAlbum.userId = userId
      newFavoriteAlbum.albumId = data.favId
  
      return this.favoriteAlbums.save(newFavoriteAlbum)
    } else {
      const favorite = await this.favoriteAlbums.findOne({
        userId,
        albumId: data.favId
      })
      return favorite ? this.favoriteAlbums.remove(favorite) : new ErrorResponse(404, 'Album not found', 'error')
    }
  }

  async addRemoveFavoriteSong(userId: number, data: FavoritesDto): Promise<FavoriteSongs | ErrorResponse> {
    if (data.value) {
      const newFavoriteAlbum: FavoriteSongs = new FavoriteSongs()
      newFavoriteAlbum.userId = userId
      newFavoriteAlbum.songId = data.favId

      return this.favoriteSongs.save(newFavoriteAlbum)
    } else {
      const favorite = await this.favoriteSongs.findOne({
        userId,
        songId: data.favId
      })
      return favorite ? this.favoriteSongs.remove(favorite) : new ErrorResponse(404, 'Song not found', 'error')
    }
  }
}