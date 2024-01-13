import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from './guards/auth.guard';

@Controller()
@UseGuards(AuthGuard)
export class AppController {
  @Get()
  getHello(): string {
    return 'GET';
  }
}
