import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Playlist } from 'entities/playlist.entity'
import { Album } from 'entities/album.entity'
import { Artist } from 'entities/artist.entity'
import { Genre } from 'entities/genre.entity'

const limit = 8
@Injectable()
export class LpService {
  constructor(
    @InjectRepository(Album)
    private readonly album: Repository<Album>,
    @InjectRepository(Artist)
    private readonly artist: Repository<Artist>,
    @InjectRepository(Genre)
    private readonly genre: Repository<Genre>,
    @InjectRepository(Playlist)
    private readonly playlist: Repository<Playlist>,
  ) {}

  async getLpAlbums(): Promise<Album[] | null> {
    return this.album.find({
      take: limit
    })
  }
  async getLpArtists(): Promise<Artist[] | null> {
    return this.artist.find({
      take: limit
    })
  }
  async getLpGenres(): Promise<Genre[] | null> {
    return this.genre.find({
      take: limit
    })
  }
  async getLpPlaylists(): Promise<Playlist[] | null> {
    return this.playlist.find({
      take: limit
    })
  }
  async getLp(): Promise<any | null> {
    let lp = {
      albums: [],
      artists: [],
      genres: [],
      playlists: []
    }
    const albums = await this.getLpAlbums()
    const artists = await this.getLpArtists()
    const genres = await this.getLpGenres()
    const playlists = await this.getLpPlaylists()
    
    lp.albums.push(albums)
    lp.artists.push(artists)
    lp.genres.push(genres)
    lp.playlists.push(playlists)

    return lp
  }
}