import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UserService } from '../services/user/user.service'
import { JwtService } from '@nestjs/jwt'
import { AddUserDto } from 'src/dtos/user/add.user.dto'
import { User } from 'entities/user.entity'
import { getPasswordHash } from './hash-password'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.getByUsername(username)
    const passwordHashString = getPasswordHash(pass)
    if (user && user.passwordHash === passwordHashString) {
      const { passwordHash, ...result } = user
      return result
    }
    return null
  }
  async login(user: any) {
    const payload = { username: user.username, sub: user.userId }
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
  async verifyToken(token: string) {
    const cleanToken = token.replace('Bearer', '').trim()
    try {
      this.jwtService.verify(cleanToken)
      return true
    } catch {
      throw new UnauthorizedException('Invalid token', 'Invalid token')
    }     
  }
  async register(data: AddUserDto): Promise<User> {
    let newUser: User = new User()
    newUser.email = data.email
    newUser.username = data.username
    newUser.passwordHash = getPasswordHash(data.password)

    return this.userService.addUser(newUser)
  }
}