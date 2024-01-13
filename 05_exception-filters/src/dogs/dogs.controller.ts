import { Controller, Get } from '@nestjs/common';
import { ForbiddenException } from '../cutomExceptions/forbidden.exception';

@Controller('dogs')
export class DogsController {
  @Get()
  get() {
    throw new ForbiddenException();
  }
}