import { Controller, Get, Post, UseFilters } from '@nestjs/common';
import { ForbiddenException } from '../cutomExceptions/forbidden.exception';
import { HttpExceptionFilter } from '../cutomExceptions/http-exception.filter';

@Controller('cars')
@UseFilters(new HttpExceptionFilter())
export class CarsController {
  @Get()
  get() {
    return 'cars';
  }
  @Post()
  create() {
    throw new ForbiddenException();
  }
}
