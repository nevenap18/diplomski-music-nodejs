import {
  Column,
  Entity,
  Index,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Album } from './album.entity';
import { Song } from './song.entity';
import { Playlist } from './playlist.entity';

@Index('uq_user_email', ['email'], { unique: true })
@Index('uq_user_username', ['username'], { unique: true })
@Entity('user', { schema: 'music' })
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'user_id', unsigned: true })
  userId: number;

  @Column({
    type: 'varchar',
    unique: true,
    length: 255,
  })
  email: string;

  @Column( {
    type: 'varchar',
    unique: true,
    length: 32
  })
  username: string;

  @Column({
    type: 'varchar',
    name: 'password_hash',
    length: 128,
  })
  passwordHash: string;

  @ManyToMany(() => Album, (album) => album.users)
  albums: Album[];

  @ManyToMany(() => Song, (song) => song.users)
  songs: Song[];

  @OneToMany(() => Playlist, (playlist) => playlist.user)
  playlists: Playlist[];
}
