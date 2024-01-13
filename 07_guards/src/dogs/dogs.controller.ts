import { Controller, Get } from '@nestjs/common';

@Controller('dogs')
export class DogsController {
  @Get()
  get() {
    return 'Dogs Controller';
  }
}
