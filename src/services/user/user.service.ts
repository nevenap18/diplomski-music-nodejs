import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from 'entities/user.entity'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { EditUserDto } from 'src/dtos/user/edit.user.dto'
import { getPasswordHash } from 'src/auth/hash-password'


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

  async getById(userId: number): Promise<User | null> {
    const user = await this.user.findOne({
      userId: userId
    })

    return user || null
  }
  
  async editById(userId: number, data: EditUserDto): Promise<User | null> {
    const user = await this.getById(userId)


    if (!user) {
      return null
    }

    user.email = data.email
    user.username = data.username
    if (data.password.length >= 8) {
      const password = getPasswordHash(data.password)
      user.passwordHash = password
    } else if (data.password.length > 0 && data.password.length < 8) {
      throw new BadRequestException('Password must be 8 characters or longer');
    }
    return this.user.save(user)
  }

  async addUser (newUser: User): Promise<User> {
    return this.user.save(newUser)
  }
}