import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from './interceptors';

// @UseInterceptors(LoggingInterceptor)
@Controller()
export class AppController {
  @Get()
  get(): string {
    return 'App Controller';
  }
}
