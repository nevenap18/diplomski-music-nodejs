import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { Genre } from 'entities/genre.entity'


@Injectable()
export class GenreService extends TypeOrmCrudService<Genre> {
  constructor(
    @InjectRepository(Genre)
    private readonly genre: Repository<Genre>
  ) {
    super(genre)
  }

  async getGenreById(playlistId: number): Promise<Genre | null> {
    return this.genre.findOne(playlistId, {
      relations: ['songs']
    })
  }
}