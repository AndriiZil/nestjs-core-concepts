import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { TimeoutInterceptor } from '../interceptors';

@UseInterceptors(new TimeoutInterceptor())
@Controller('c')
export class ExampleController3 {
  @Get()
  get() {
    return new Promise<void>((r) => {
      setTimeout(() => r(), 6000);
    });
  }
}
