import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './controllers/app.controller'
import { DatabaseConfig } from 'config/database.config'
import { Album } from 'entities/album.entity'
import { Artist } from 'entities/artist.entity'
import { Genre } from 'entities/genre.entity'
import { Playlist } from 'entities/playlist.entity'
import { SongGenre } from 'entities/song-genre.entity'
import { SongPlaylist } from 'entities/song-playlist.entity'
import { Song } from 'entities/song.entity'
import { User } from 'entities/user.entity'
import { UserService } from './services/user/user.service'
import { UserController } from './controllers/api/user.controller'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DatabaseConfig.hostname,
      port: 3306,
      username: DatabaseConfig.username,
      password: DatabaseConfig.password,
      database: DatabaseConfig.database,
      entities: [
        Album,
        Artist,
        Genre,
        Playlist,
        SongGenre,
        SongPlaylist,
        Song,
        User
      ]
    }),
    TypeOrmModule.forFeature([
      User
    ])
  ],
  controllers: [
    AppController,
    UserController
  ],
  providers: [UserService],
})
export class AppModule {}
