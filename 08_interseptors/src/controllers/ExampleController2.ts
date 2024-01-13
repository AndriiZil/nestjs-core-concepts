import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ExcludeNullInterceptor } from '../interceptors';

@UseInterceptors(new ExcludeNullInterceptor())
@Controller('b')
export class ExampleController2 {
  @Get()
  get(): string {
    return null;
  }
}
