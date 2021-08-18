import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SongGenre } from './song-genre.entity';

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
}
