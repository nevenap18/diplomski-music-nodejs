// import { Injectable } from '@nestjs/common'
// import { InjectRepository } from '@nestjs/typeorm'
// import { Repository } from 'typeorm'
// import { Album } from 'entities/album.entity'
// import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'


// @Injectable()
// export class AlbumService extends TypeOrmCrudService<Album> {
//   constructor(
//     @InjectRepository(Album)
//     private readonly album: Repository<Album>
//   ) {
//     super(album)
//   }
// }

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { Album } from 'entities/album.entity'


@Injectable()
export class AlbumService extends TypeOrmCrudService<Album> {
  constructor(
    @InjectRepository(Album)
    private readonly album: Repository<Album>
  ) {
    super(album)
  }

  async getAlbumById(albumId: number): Promise<Album | null> {
    return this.album.findOne({
      where: {
          id: albumId
      },
      join: {
          alias: 'album',
          leftJoinAndSelect: {
              'songs': 'album.songs',
              'artist': 'songs.artist'
          }
      }
    })
  }
}
