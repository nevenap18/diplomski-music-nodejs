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

@Index('fk_album_artist_id', ['artistId'], {})
@Entity('album')
export class Album {
  @PrimaryGeneratedColumn({ type: 'int', name: 'album_id', unsigned: true })
  albumId: number;

  @Column({ type: 'varchar', length: 255})
  title: string;

  @Column({ type: 'year', default: () => "'2021'"  })
  year: number;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'int', name: 'artist_id', unsigned: true})
  artistId: number;

  @ManyToOne(() => Artist, (artist) => artist.albums, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'artist_id', referencedColumnName: 'artistId' }])
  artist: Artist;

  @ManyToMany(() => User, (user) => user.albums)
  @JoinTable({
    name: 'favorite_albums',
    joinColumns: [{ name: 'album_id', referencedColumnName: 'albumId' }],
    inverseJoinColumns: [{ name: 'user_id', referencedColumnName: 'userId' }],
    schema: 'music',
  })
  users: User[];

  @OneToMany(() => Song, (song) => song.album)
  songs: Song[];
}
