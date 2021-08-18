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
import { User } from './user.entity';
import { Album } from './album.entity';
import { Artist } from './artist.entity';
import { SongGenre } from './song-genre.entity';
import { SongPlaylist } from './song-playlist.entity';

@Index('fk_song_artist_id', ['artistId'], {})
@Index('fk_song_album_id', ['albumId'], {})
@Entity('song')
export class Song {
  @PrimaryGeneratedColumn({ type: 'int', name: 'song_id', unsigned: true })
  songId: number;

  @Column({ type: 'int', name: 'artist_id', unsigned: true })
  artistId: number;

  @Column({
    type: 'int',
    name: 'album_id',
    nullable: true,
    unsigned: true
  })
  albumId: number | null;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'year', nullable: true, default: () => "'2021'" })
  year: number | null;

  @Column({ type: 'text' })
  url: string;

  @Column({ type: 'text', name: 'image_url' })
  imageUrl: string;

  @ManyToMany(() => User, (user) => user.songs)
  @JoinTable({
    name: 'favorite_songs',
    joinColumns: [{ name: 'song_id', referencedColumnName: 'songId' }],
    inverseJoinColumns: [{ name: 'user_id', referencedColumnName: 'userId' }],
    schema: 'music',
  })
  users: User[];

  @ManyToOne(() => Album, (album) => album.songs, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'album_id', referencedColumnName: 'albumId' }])
  album: Album;

  @ManyToOne(() => Artist, (artist) => artist.songs, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'artist_id', referencedColumnName: 'artistId' }])
  artist: Artist;

  @OneToMany(() => SongGenre, (songGenre) => songGenre.song)
  songGenres: SongGenre[];

  @OneToMany(() => SongPlaylist, (songPlaylist) => songPlaylist.song)
  songPlaylists: SongPlaylist[];
}
