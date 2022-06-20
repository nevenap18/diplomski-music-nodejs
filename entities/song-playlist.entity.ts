import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
// import { Artist } from './artist.entity';
import { Playlist } from './playlist.entity';
import { Song } from './song.entity';

@Index('uq_song_playlist_song_id_playlist_id', ['songId', 'playlistId'], {
  unique: true,
})
@Index('fk_song_playlist_playlist_id', ['playlistId'], {})
@Entity('song_playlist')
export class SongPlaylist {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'song_playlist_id',
    unsigned: true,
  })
  songPlaylistId: number;

  @Column({ type: 'int', name: 'song_id', unsigned: true })
  songId: number;

  @Column({ type: 'int', name: 'playlist_id', unsigned: true })
  playlistId: number;

  @ManyToOne(() => Playlist, (playlist) => playlist.songPlaylists, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'playlist_id', referencedColumnName: 'id' }])
  playlist: Playlist;

  @ManyToOne(() => Song, (song) => song.songPlaylists, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'song_id', referencedColumnName: 'songId' }])
  song: Song;

  // @ManyToOne(() => Song, (song) => song.artist, {
  //   onDelete: 'RESTRICT',
  //   onUpdate: 'CASCADE',
  // })
  // @JoinColumn([{ name: 'artist_id', referencedColumnName: 'artistId' }])
  // artist: Artist;
}
