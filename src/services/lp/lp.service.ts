import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Playlist } from 'entities/playlist.entity'
import { Album } from 'entities/album.entity'
import { Artist } from 'entities/artist.entity'
import { Genre } from 'entities/genre.entity'

const limit = 5
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
      relations: ['artist'],
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
  getLpPlaylists(userId: number): Promise<Playlist[] | null> {
    return this.playlist.find({
      where: {
          userId
      },
      take: limit
    })
  }
  async getLp(userId: number): Promise<any | null> {
    return {
      albums: await this.getLpAlbums(),
      artists: await this.getLpArtists(),
      playlists: await this.getLpPlaylists(userId),
      genres: await this.getLpGenres()
    }
  }
}