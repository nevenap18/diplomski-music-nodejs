import { Controller, Get, Param } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { Album } from "entities/album.entity";
import { Playlist } from "entities/playlist.entity";
import { Song } from "entities/song.entity";
import { User } from "entities/user.entity";
import { UserService } from "src/services/user/user.service";

@Controller('api/user')
@Crud({
  model: {
    type: User
  },
  params: {
    id: {
      field: 'userId',
      type: 'number',
      primary: true
    }
  },
  query: {
    join: {
      favoriteSongs: {
        eager: true
      }
    }
  }
})
export class UserController {
  constructor(public service: UserService) {}

  // @Get()
  // getAll(): Promise<User[]> {
  //   return this.service.getAll()
  // }

  // @Get(':id')
  // getUserById(@Param('id') userId: number): Promise<User> {
  //   return this.service.getById(userId)
  // }

  // @Put()
  // add(@Body() data: AddUserDto): Promise<User> {
  //   return this.service.add(data)
  // }

  // @Post(':id')
  // edit(@Param('id') userId: number, @Body() data: EditUserDto): Promise<User> {
  //   return this.service.editById(userId, data)
  // }
}