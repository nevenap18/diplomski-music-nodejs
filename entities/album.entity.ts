import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Artist } from './artist.entity';
import { User } from './user.entity';
import { Song } from './song.entity';
import { FavoriteAlbums } from './FavoriteAlbums';

@Index("fk_album_artist_id", ["artistId"], {})
@Entity("album", { schema: "music" })
export class Album {
  @PrimaryGeneratedColumn({ type: "int", name: "album_id", unsigned: true })
  id: number;

  @Column("varchar", { name: "title", length: 255, default: () => "'0'" })
  title: string;

  @Column("year", { name: "year", default: () => "'2021'" })
  year: number;

  @Column("text", { name: "description" })
  description: string;

  @Column("int", { name: "artist_id", unsigned: true, default: () => "'0'" })
  artistId: number;

  @Column("text", { name: "image" })
  image: string;

  @ManyToOne(() => Artist, (artist) => artist.albums, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "artist_id", referencedColumnName: "id" }])
  artist: Artist;

  @OneToMany(() => FavoriteAlbums, (favoriteAlbums) => favoriteAlbums.album)
  favoriteAlbums: FavoriteAlbums[];

  @OneToMany(() => Song, (song) => song.album)
  songs: Song[];
}