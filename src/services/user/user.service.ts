import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from 'entities/user.entity'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { AddUserDto } from 'src/dtos/user/add.user.dto'


@Injectable()
export class UserService extends TypeOrmCrudService<User> {
  constructor(
    @InjectRepository(User)
    private readonly user: Repository<User>
  ) {
    super(user)
  }

  async getByUsername(username: string): Promise<User | null> {
    const user = await this.user.findOne({
      username: username
    })

    return user || null
  }
  add(data: AddUserDto): Promise<User> {
    let newUser: User = new User()
    newUser.email = data.email
    newUser.username = data.username
    newUser.passwordHash = this.getPasswordHash(data.password)

    return this.user.save(newUser)
  }

  getPasswordHash(password: string): string {
    const crypto = require('crypto')

    const hash = crypto.createHash('sha512')
    hash.update(password)

    return hash.digest('hex').toUpperCase()
  } 
}