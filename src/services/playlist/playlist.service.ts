import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { Playlist } from 'entities/playlist.entity'
import { User } from 'entities/user.entity'
import { CreatePlaylistDto } from 'src/dtos/playlist/create.playlist.dto'
import { AddSongPlaylistDto } from 'src/dtos/playlist/add-song.playlist.dto'
import { SongPlaylist } from 'entities/song-playlist.entity'
import { RemoveSongPlaylistDto } from 'src/dtos/playlist/remove-song.playlist.dto'
import { EditPlaylistDto } from 'src/dtos/playlist/edit.playlist.dto'
import { ErrorResponse } from 'src/respone/api.response.class'
import { Song } from 'entities/song.entity'

const playlistNotFound = 'Playlist not found'
@Injectable()
export class PlaylistService extends TypeOrmCrudService<Playlist> {
  constructor(
    @InjectRepository(Playlist)
    private readonly playlist: Repository<Playlist>,
    @InjectRepository(User)
    private readonly user: Repository<User>,
    @InjectRepository(SongPlaylist)
    private readonly songPlaylist: Repository<SongPlaylist>,
    @InjectRepository(Song)
    private readonly song: Repository<Song>
  ) {
    super(playlist)
  }

  async getPlaylistById(userId: number, playlistId: number): Promise<Playlist | ErrorResponse> {
    const playlist = await this.playlist.findOne({
      where: {
          id: playlistId,
          userId
      },
      join: {
          alias: 'playlist',
          leftJoinAndSelect: {
              'songs': 'playlist.songs',
              'artist': 'songs.artist'
          }
      }
    })
    return playlist || new ErrorResponse(404, playlistNotFound, 'error')
  }

  async getPlaylist(userId: number, playlistId: number): Promise<Playlist> {
    const playlist = await this.playlist.findOne({
      id: playlistId,
      userId
    })
    
    return playlist
  }

  async getAllUserPlaylists(userId: number): Promise<Playlist[] | null> {
    const user = await this.user.findOne(userId, {
      relations: ['playlists']
    })
    
    return user.playlists
  }

  async createPlaylist(userId: number, data: CreatePlaylistDto): Promise<Playlist | ErrorResponse> {
    const newPlaylist: Playlist = new Playlist()
    newPlaylist.title = data.title
    newPlaylist.description = data.description
    newPlaylist.userId = userId

    return this.playlist.save(newPlaylist)
  }

  async addSongToPlaylist(userId: number, data: AddSongPlaylistDto): Promise<SongPlaylist | ErrorResponse> {

    const playlist = await this.getPlaylist(userId, data.playlistId)
    if (!playlist) {
      return new ErrorResponse(404, playlistNotFound, 'error')
    }
    const song = await this.song.findOne(data.songId)
    if (!song) {
      return new ErrorResponse(404, 'Song not found', 'error')
    }
    const songPlaylist = await this.songPlaylist.findOne({
      songId: data.songId,
      playlistId: data.playlistId
    })
    songPlaylist.songId = data.songId
    songPlaylist.playlistId = data.playlistId

    return this.songPlaylist.save(songPlaylist)
  }

  async removeSongFromPlaylist(userId: number, data: RemoveSongPlaylistDto): Promise<SongPlaylist | ErrorResponse> {

    const playlist = await this.getPlaylist(userId, data.playlistId)
    if (!playlist) {
      return new ErrorResponse(404, playlistNotFound, 'error')
    }
    const song = await this.song.findOne(data.songId)
    if (!song) {
      return new ErrorResponse(404, 'Song not found', 'error')
    }
    const songPlaylistObj = await this.songPlaylist.findOne({
      songId: data.songId,
      playlistId: data.playlistId
    })

    return songPlaylistObj ? this.songPlaylist.remove(songPlaylistObj) : new ErrorResponse(404, 'Entry not found', 'error')
  }

  async editPlaylist(data: EditPlaylistDto): Promise<Playlist | ErrorResponse> {
    const playlist = await this.playlist.findOne({
      id: data.playlistId
    })

    if (playlist) {
      playlist.title = data.title
      playlist.description = data.description
      return this.playlist.save(playlist)
    } else {
      return new ErrorResponse(404, playlistNotFound, 'error')
    }
  }

  async deletePlaylistById(userId: number, playlistId: number) {
    const playlist = await this.getPlaylistById(userId, playlistId)
    if (playlist) {
      return this.playlist.delete(playlistId)
    } else {
      return new ErrorResponse(404, playlistNotFound, 'error')
    }
  }
}