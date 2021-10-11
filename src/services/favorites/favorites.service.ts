import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { FavoriteAlbums } from 'entities/FavoriteAlbums'
import { FavoriteSongs } from 'entities/FavoriteSongs'
import { FavoritesDto } from 'src/dtos/favorites/favorites.dto'
import { User } from 'entities/user.entity'
import { Song } from 'entities/song.entity'
import { Album } from 'entities/album.entity'
import { Playlist } from 'entities/playlist.entity'


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

  async getFavoriteSongs(userId: number): Promise<Song[] | null> {
    const user = await this.user.findOne(userId, {
      relations: ['songs']
    });
    
    return user.songs
  }

  async getFavoriteAlbums(userId: number): Promise<Album[] | null> {
    const user = await this.user.findOne(userId, {
      relations: ['albums']
    });
    
    return user.albums
  }

  async getPlaylists(userId: number): Promise<Playlist[] | null> {
    const user = await this.user.findOne(userId, {
      relations: ['playlists']
    });
    
    return user.playlists
  }

  async addRemoveFavoriteAlbum(data: FavoritesDto): Promise<FavoriteAlbums | null> {
    const favorite = await this.favoriteAlbums.findOne({
      userId: data.userId,
      albumId: data.favId
    })

    if (favorite && !data.value) {
      return this.favoriteAlbums.remove(favorite)
    }
    let newFavoriteAlbum: FavoriteAlbums = new FavoriteAlbums()
    newFavoriteAlbum.userId = data.userId
    newFavoriteAlbum.albumId = data.favId

    return this.favoriteAlbums.save(newFavoriteAlbum)
  }

  async addRemoveFavoriteSong(data: FavoritesDto): Promise<FavoriteSongs | null> {
    const favorite = await this.favoriteSongs.findOne({
      userId: data.userId,
      songId: data.favId
    })

    if (favorite && !data.value) {
      return this.favoriteSongs.remove(favorite)
    }
    let newFavoriteSong: FavoriteSongs = new FavoriteSongs()
    newFavoriteSong.userId = data.userId
    newFavoriteSong.songId = data.favId

    return this.favoriteSongs.save(newFavoriteSong)
  }
}