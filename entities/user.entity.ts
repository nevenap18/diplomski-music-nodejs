import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Playlist } from './playlist.entity';
import { FavoriteAlbums } from './FavoriteAlbums';
import { FavoriteSongs } from './FavoriteSongs';
import { Song } from './song.entity';
import { Album } from './album.entity';

@Index("uq_user_email", ["email"], { unique: true })
@Index("uq_user_username", ["username"], { unique: true })
@Entity("user", { schema: "music" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "user_id", unsigned: true })
  userId: number;

  @Column("varchar", {
    name: "email",
    unique: true,
    length: 255,
    default: () => "'0'",
  })
  email: string;

  @Column("varchar", {
    name: "username",
    unique: true,
    length: 32,
    default: () => "'0'",
  })
  username: string;

  @Column("varchar", {
    name: "password_hash",
    length: 128,
    default: () => "'0'",
  })
  passwordHash: string;

  @OneToMany(() => FavoriteAlbums, (favoriteAlbums) => favoriteAlbums.user)
  favoriteAlbums: FavoriteAlbums[];

  @OneToMany(() => FavoriteSongs, (favoriteSongs) => favoriteSongs.user)
  favoriteSongs: FavoriteSongs[];

  @OneToMany(() => Playlist, (playlist) => playlist.user)
  playlists: Playlist[];

  @ManyToMany(type => Song)
  @JoinTable({
    name: 'favorite_songs',
    joinColumn: { name: 'user_id', referencedColumnName: 'userId' },
    inverseJoinColumn: { name: 'song_id', referencedColumnName: 'songId' },
  })
  songs: Song[];

  @ManyToMany(type => Album)
  @JoinTable({
    name: 'favorite_albums',
    joinColumn: { name: 'user_id', referencedColumnName: 'userId' },
    inverseJoinColumn: { name: 'album_id', referencedColumnName: 'albumId' },
  })
  albums: Album[];
}
