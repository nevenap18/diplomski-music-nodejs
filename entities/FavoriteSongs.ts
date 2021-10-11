import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Song } from './song.entity';
import { User } from './user.entity';

@Index('fk_favorite_songs_song_id', ['songId'], {})
@Index('uq_favorite_songs_user_id_song_id', ['userId', 'songId'], {
  unique: true,
})
@Entity('favorite_songs', { schema: 'music' })
export class FavoriteSongs {
  @Column({
    type: 'int',
    primary: true,
    name: 'user_id',
    unsigned: true,
    default: () => "'0'",
  })
  userId: number;

  @Column({
    type: 'int',
    primary: true,
    name: 'song_id',
    unsigned: true,
    default: () => "'0'",
  })
  songId: number;

  @Column('date', { name: 'date', nullable: true })
  date: string | null;

  @ManyToOne(() => Song, (song) => song.favoriteSongs, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'song_id', referencedColumnName: 'songId' }])
  song: Song;

  @ManyToOne(() => User, (user) => user.favoriteSongs, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'userId' }])
  user: User;
}
