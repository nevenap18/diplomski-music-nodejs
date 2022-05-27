import { Body, Controller, Get, Patch, Request } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { User } from "entities/user.entity";
import { EditUserDto } from "src/dtos/user/edit.user.dto";
import { UserService } from "src/services/user/user.service";

@Controller('api/profile')
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
  routes: {
    exclude: [
        'updateOneBase',
        'replaceOneBase',
        'deleteOneBase',
        'createManyBase',
        'createOneBase'
    ]
  }
})
export class UserController {
  constructor(public service: UserService) {}

  @Get()
  getProfile(@Request() req) {
    // return req.user
    return this.service.getById(req.user.userId)
  }
  @Patch('edit')
  edit(@Request() req, @Body() data: EditUserDto): Promise<User> {
    return this.service.editById(req.user.userId, data)
  }
}