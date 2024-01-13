import { Controller, Get, Post } from '@nestjs/common';
import { Roles } from '../decorators/roles.decorator';

@Controller('cats')
export class CatsController {
  @Get()
  get() {
    return 'Cats Controller';
  }
  @Post()
  @Roles(['admin'])
  create() {
    return 'CatsController created';
  }
}
