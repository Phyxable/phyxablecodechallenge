import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async getUser() {
    return { name: 'John Doe' };
  }
}
