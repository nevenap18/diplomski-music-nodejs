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
import { SongPlaylist } from './song-playlist.entity';
import { Song } from './song.entity';

@Index('fk_playlist_user_id', ['userId'], {})
@Entity('playlist')
export class Playlist {
  @PrimaryGeneratedColumn({ type: 'int', name: 'playlist_id', unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 255})
  title: string;

  @Column({  type: 'text' })
  description: string;

  @Column({ type: 'int', name: 'user_id', unsigned: true })
  userId: number;

  @Column({  type: 'varchar', length: 255, name: 'image_url',  default: () => "'hjdhfjdhfjdhfjd'"  })
  image: string;

  @ManyToOne(() => User, (user) => user.playlists, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'userId' }])
  user: User;

  @OneToMany(() => SongPlaylist, (songPlaylist) => songPlaylist.playlist)
  songPlaylists: SongPlaylist[];

  @ManyToMany(type => Song)
  @JoinTable({
    name: 'song_playlist',
    joinColumn: { name: 'playlist_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'song_id', referencedColumnName: 'songId' },
  })
  songs: Song[];
}
