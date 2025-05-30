import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login() {
    return this.authService.login('Khoa');
  }
  @Post('signup')
  signup() {
    return this.authService.signup();
  }
}
