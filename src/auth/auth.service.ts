import { Injectable } from '@nestjs/common';
import { UserService } from '../services/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.getByUsername(username)
    if (user && user.passwordHash === pass) {
      const { passwordHash, ...result } = user;
      return result;
    }
    return null;
  }
}