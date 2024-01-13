import { Controller, Get } from '@nestjs/common';
import { User } from './decorators/user.decorator';

@Controller()
export class AppController {
  @Get()
  get(@User('firstName') firstName: string) {
    return {
      message: `Hello ${firstName}`,
    };
  }
}
