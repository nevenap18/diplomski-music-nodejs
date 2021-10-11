import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Artist } from 'entities/artist.entity'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'


@Injectable()
export class ArtistService extends TypeOrmCrudService<Artist> {
  constructor(
    @InjectRepository(Artist)
    private readonly artist: Repository<Artist>
  ) {
    super(artist)
  }


}
