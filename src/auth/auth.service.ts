import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(user: string) {
    return { user: user };
  }
  signup() {
    return 'you are signed up';
  }
}
