import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Album } from './album.entity';
import { Song } from './song.entity';

@Entity('artist')
export class Artist {
  @PrimaryGeneratedColumn({ type: 'int', name: 'artist_id', unsigned: true })
  artistId: number;

  @Column({ type: 'varchar', name: 'name', length: 255 })
  name: string;

  @OneToMany(() => Album, (album) => album.artist)
  albums: Album[];

  @OneToMany(() => Song, (song) => song.artist)
  songs: Song[];
}
