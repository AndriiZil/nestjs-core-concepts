import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { TransformInterceptor } from '../interceptors';

@UseInterceptors(new TransformInterceptor())
@Controller('a')
export class ExampleController1 {
  @Get()
  get(): string {
    return 'Example Controller 1';
  }
}
