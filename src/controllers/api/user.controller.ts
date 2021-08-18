import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { User } from "entities/user.entity";
import { AddUserDto } from "src/dtos/user/add.user.dto";
import { EditUserDto } from "src/dtos/user/edit.user.dto";
import { UserService } from "src/services/user/user.service";

@Controller('api/user')
export class UserController {
  constructor(
    private userService: UserService
  ) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.userService.getAll()
  }

  @Get(':id')
  getUserById(@Param('id') userId: number): Promise<User> {
    return this.userService.getById(userId)
  }

  @Put()
  add(@Body() data: AddUserDto): Promise<User> {
    return this.userService.add(data)
  }

  @Post(':id')
  edit(@Param('id') userId: number, @Body() data: EditUserDto): Promise<User> {
    return this.userService.editById(userId, data)
  }
}