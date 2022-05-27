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
import { Album } from './album.entity';
import { Artist } from './artist.entity';
import { SongGenre } from './song-genre.entity';
import { SongPlaylist } from './song-playlist.entity';
import { FavoriteSongs } from './FavoriteSongs';

@Index("fk_song_album_id", ["albumId"], {})
@Index("fk_song_artist_id", ["artistId"], {})
@Entity("song", { schema: "music" })
export class Song {
  @PrimaryGeneratedColumn({ type: "int", name: "song_id", unsigned: true })
  songId: number;

  @Column("int", { name: "artist_id", unsigned: true, default: () => "'0'" })
  artistId: number;

  @Column("int", {
    name: "album_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  albumId: number | null;

  @Column("varchar", { name: "title", length: 255, default: () => "'0'" })
  title: string;

  @Column("year", { name: "year", nullable: true, default: () => "'2021'" })
  year: number | null;

  @Column("text", { name: "url" })
  url: string;

  @Column("text", { name: "image_url" })
  imageUrl: string;

  @OneToMany(() => FavoriteSongs, (favoriteSongs) => favoriteSongs.song)
  favoriteSongs: FavoriteSongs[];

  @ManyToOne(() => Album, (album) => album.songs, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "album_id", referencedColumnName: "id" }])
  album: Album;

  @JoinColumn([{ name: "artist_id", referencedColumnName: "id" }])
  @ManyToOne(() => Artist, (artist) => artist.songs, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  artist: Artist;

  @OneToMany(() => SongGenre, (songGenre) => songGenre.song)
  songGenres: SongGenre[];

  @OneToMany(() => SongPlaylist, (songPlaylist) => songPlaylist.song)
  songPlaylists: SongPlaylist[];

}
