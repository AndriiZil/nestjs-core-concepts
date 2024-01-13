import { ForbiddenException } from './cutomExceptions/forbidden.exception';
import {
  Get,
  Post,
  Controller,
  UseFilters,
  HttpStatus,
  HttpException,
  BadRequestException,
  NotImplementedException,
} from '@nestjs/common';
import { HttpExceptionFilter } from './cutomExceptions/http-exception.filter';

@Controller('app')
export class AppController {
  @Get()
  standardException() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
  @Get('custom')
  custom() {
    throw new ForbiddenException();
  }
  @Get('bad-request')
  badRequest() {
    throw new BadRequestException('Something bad happened', {
      cause: new Error(),
      description: 'Some error description',
    });
  }
  @Post()
  // @UseFilters(new HttpExceptionFilter())
  @UseFilters(HttpExceptionFilter)
  forbiddenWithFilter() {
    throw new ForbiddenException();
  }
  @Get('not')
  notImplemented() {
    throw new NotImplementedException();
  }
}
