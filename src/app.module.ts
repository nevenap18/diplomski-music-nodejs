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
import { SongService } from './services/song/song.service'
import { SongController } from './controllers/api/song.controller'
import { ArtistController } from './controllers/api/artist.controller'
import { ArtistService } from './services/artist/artist.service'
import { AlbumController } from './controllers/api/album.controller'
import { AlbumService } from './services/album/album.service'
import { FavoriteAlbums } from 'entities/FavoriteAlbums'
import { FavoriteSongs } from 'entities/FavoriteSongs'
import { PlaylistController } from './controllers/api/playlist.controller'
import { PlaylistService } from './services/playlist/playlist.service'
import { GenreController } from './controllers/api/genre.controller'
import { GenreService } from './services/genre/genre.service'
import { LpController } from './controllers/api/lp.controller'
import { LpService } from './services/lp/lp.service'
import { FavoritesController } from './controllers/api/favorites.controller'
import { FavoritesService } from './services/favorites/favorites.service'
import { AuthService } from './auth/auth.service'
import { LocalStrategy } from './auth/local.strategy'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants'
import { JwtStrategy } from './auth/jwt.strategy'
import { JwtAuthGuard } from './auth/jwt-auth.guard'
import { APP_GUARD } from '@nestjs/core'

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '864000s' },
    }),
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
        User,
        FavoriteAlbums,
        FavoriteSongs
      ]
    }),
    TypeOrmModule.forFeature([
      User,
      Song,
      Artist,
      Album,
      Playlist,
      Genre,
      FavoriteSongs,
      FavoriteAlbums,
      SongPlaylist
    ])
  ],
  controllers: [
    AppController,
    UserController,
    SongController,
    ArtistController,
    AlbumController,
    PlaylistController,
    GenreController,
    LpController,
    FavoritesController
  ],
  providers: 
  [
    UserService,
    SongService,
    ArtistService,
    AlbumService,
    PlaylistService,
    GenreService,
    LpService,
    FavoritesService,
    AuthService,
    LocalStrategy,
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    }
  ],
})
export class AppModule {}
