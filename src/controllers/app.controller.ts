import { Controller, Request, Post, UseGuards, Get, Body } from '@nestjs/common'
import { AuthService } from 'src/auth/auth.service'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard'
import { Public } from 'src/auth/public.decorator';
import { AddUserDto } from 'src/dtos/user/add.user.dto';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}
  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user)
  }
  @Public()
  @Post('auth/register')
  async register(@Body() data: AddUserDto) {
    return this.authService.register(data)
  }

  @Public()
  @Post('auth/verify')
  async verifyToken(@Body() data) {
    return this.authService.verifyToken(data.token)
  }
}
