import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor } from '../interceptors';

@UseInterceptors(new CacheInterceptor())
@Controller('e')
export class ExampleController5 {
  @Get()
  get(): string {
    return 'Example Controller 5';
  }
}
