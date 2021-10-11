import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Album } from 'entities/album.entity'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'


@Injectable()
export class AlbumService extends TypeOrmCrudService<Album> {
  constructor(
    @InjectRepository(Album)
    private readonly album: Repository<Album>
  ) {
    super(album)
  }


}
