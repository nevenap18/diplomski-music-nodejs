import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Song } from 'entities/song.entity'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'


@Injectable()
export class SongService extends TypeOrmCrudService<Song> {
  constructor(
    @InjectRepository(Song)
    private readonly song: Repository<Song>
  ) {
    super(song)
  }
}
