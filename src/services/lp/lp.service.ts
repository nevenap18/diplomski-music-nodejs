import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Playlist } from 'entities/playlist.entity'
import { Album } from 'entities/album.entity'
import { Artist } from 'entities/artist.entity'
import { Genre } from 'entities/genre.entity'

const limit = 6
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

  getLpAlbums(): Promise<Album[] | null> {
    return this.album.find({
      take: limit
    })
  }
  getLpArtists(): Promise<Artist[] | null> {
    return this.artist.find({
      take: limit
    })
  }
  getLpGenres(): Promise<Genre[] | null> {
    return this.genre.find({
      take: limit
    })
  }
  getLpPlaylists(): Promise<Playlist[] | null> {
    return this.playlist.find({
      take: limit
    })
  }
  async getLp(): Promise<any | null> {
    const lp = {
      albums: await this.getLpAlbums(),
      artists: await this.getLpArtists(),
      genres: await this.getLpGenres(),
      playlists: await this.getLpPlaylists()
    }
    // const albums = this.getLpAlbums()
    // const artists = this.getLpArtists()
    // const genres = this.getLpGenres()
    // const playlists = this.getLpPlaylists()
    
    // // lp.albums = albums
    // lp.artists = artists
    // lp.genres = genres
    // lp.playlists = playlists

    return lp
  }
}