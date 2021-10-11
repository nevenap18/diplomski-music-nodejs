import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { Playlist } from 'entities/playlist.entity'


@Injectable()
export class PlaylistService extends TypeOrmCrudService<Playlist> {
  constructor(
    @InjectRepository(Playlist)
    private readonly playlist: Repository<Playlist>
  ) {
    super(playlist)
  }

  async getPlaylistById(playlistId: number): Promise<Playlist | null> {
    return this.playlist.findOne(playlistId, {
      relations: ['songs']
    })
  }
}