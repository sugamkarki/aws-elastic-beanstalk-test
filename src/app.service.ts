import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getURL(): string {
    return '/api';
  }
}
