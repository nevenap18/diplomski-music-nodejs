import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Album } from 'entities/album.entity'
import { User } from 'entities/user.entity';

@Index("fk_favorite_albums_album_id", ["albumId"], {})
@Index("uq_favorite_albums_user_id_album_id", ["userId", "albumId"], {
  unique: true,
})
@Entity("favorite_albums", { schema: "music" })
export class FavoriteAlbums {
  @Column("int", {
    primary: true,
    name: "user_id",
    unsigned: true,
    default: () => "'0'",
  })
  userId: number;

  @Column("int", {
    primary: true,
    name: "album_id",
    unsigned: true,
    default: () => "'0'",
  })
  albumId: number;

  @Column("date", { name: "date", nullable: true })
  date: string | null;

  @ManyToOne(() => Album, (album) => album.favoriteAlbums, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "album_id", referencedColumnName: "albumId" }])
  album: Album;

  @ManyToOne(() => User, (user) => user.favoriteAlbums, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  user: User;
}
