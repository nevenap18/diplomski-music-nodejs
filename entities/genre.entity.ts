import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SongGenre } from './song-genre.entity';
import { Song } from './song.entity';

@Entity('genre')
export class Genre {
  @PrimaryGeneratedColumn({ type: 'int', name: 'genre_id', unsigned: true })
  genreId: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'text', name: 'image_url' })
  imageUrl: string;

  @OneToMany(() => SongGenre, (songGenre) => songGenre.genre)
  songGenres: SongGenre[];

  @ManyToMany(type => Song)
  @JoinTable({
    name: 'song_genre',
    joinColumn: { name: 'genre_id', referencedColumnName: 'genreId' },
    inverseJoinColumn: { name: 'song_id', referencedColumnName: 'songId' },
  })
  songs: Song[];
}
