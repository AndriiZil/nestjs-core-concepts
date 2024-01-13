import {
  Get,
  Param,
  Query,
  Controller,
  HttpStatus,
  ParseIntPipe,
  ParseUUIDPipe,
  ParseBoolPipe,
  DefaultValuePipe,
} from '@nestjs/common';
import { ValidationPipe } from './pipes/validation.pipe';

@Controller('transform')
export class TransformController {
  @Get('defaults')
  findAll(
    @Query('activeOnly', new DefaultValuePipe(false), ParseBoolPipe) activeOnly: boolean,
    @Query('page', new DefaultValuePipe(0), ParseIntPipe) page: number,
  ) {
    console.log({ activeOnly, page }); // { activeOnly: false, page: 0 }
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): string {
    console.log('Type:', typeof id); // Number
    return 'App Controller';
  }
  @Get('path/:id')
  getAll(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    console.log(id); // Number
    return 'App Controller';
  }
  @Get('find/:id')
  find(@Param('id', new ParseUUIDPipe()) uuid: string) {
    console.log({ uuid }); // Error
    return 'Find';
  }
  @Get('pipe/:id')
  pipe(@Param('id', ValidationPipe) id: string) {
    console.log({ id });
    return 'own pipe';
  }
}
