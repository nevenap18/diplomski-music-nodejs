import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Genre } from './genre.entity';
import { Song } from './song.entity';

@Index('uq_song_genre_song_id_genre_id', ['songId', 'genreId'], {
  unique: true,
})
@Index('fk_song_genre_genre_id', ['genreId'], {})
@Entity('song_genre')
export class SongGenre {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'song_genre_id',
    unsigned: true,
  })
  songGenreId: number;

  @Column({ type: 'int', name: 'song_id', unsigned: true })
  songId: number;

  @Column({ type: 'int', name: 'genre_id', unsigned: true })
  genreId: number;

  @ManyToOne(() => Genre, (genre) => genre.songGenres, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'genre_id', referencedColumnName: 'id' }])
  genre: Genre;

  @ManyToOne(() => Song, (song) => song.songGenres, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'song_id', referencedColumnName: 'songId' }])
  song: Song;
}
