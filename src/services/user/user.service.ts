import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from 'entities/user.entity'
import { AddUserDto } from 'src/dtos/user/add.user.dto'
import { EditUserDto } from 'src/dtos/user/edit.user.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly user: Repository<User>
  ) {}

  getAll(): Promise<User[]>  {
    return this.user.find()
  }

  async getByUsername(usernameArg: string): Promise<User | null> {
    const admin = await this.user.findOne({
      username: usernameArg
    })

    return admin || null
  }

  getById(id: number): Promise<User> {
      return this.user.findOne(id)
  }

  add(data: AddUserDto): Promise<User> {
    let newUser: User = new User()
    newUser.email = data.email
    newUser.username = data.username
    newUser.passwordHash = this.getPasswordHash(data.password)

    return this.user.save(newUser)
  }

  async editById(id: number, data: EditUserDto): Promise<User> {
    let user: User = await this.user.findOne(id)

    user.username = data.username
    user.passwordHash = this.getPasswordHash(data.password)

    return this.user.save(user)
  }

  getPasswordHash(password: string): string {
    const crypto = require('crypto')

    const hash = crypto.createHash('sha512')
    hash.update(password)

    const passwordHash = hash.digest('hex').toUpperCase()

    return passwordHash
  } 
}
