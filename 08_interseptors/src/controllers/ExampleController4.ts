import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ErrorsInterceptor } from '../interceptors';

@UseInterceptors(new ErrorsInterceptor())
@Controller('d')
export class ExampleController4 {
  @Get()
  get(): string {
    throw new Error('Error');
  }
}
