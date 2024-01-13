import { Request, Response } from 'express';
import {
  Ip,
  Body,
  Req,
  Res,
  Get,
  Post,
  Query,
  Param,
  Header,
  HttpCode,
  Headers,
  Controller,
  HttpStatus,
  HostParam,
  Redirect,
} from '@nestjs/common';
import { MainDto } from './dto/main.dto';

@Controller('main')
export class AppController {
  @Post('all')
  create(@Req() request: Request, @Body() body: string) {
    console.log({ request });
    console.log({ body });
    return 'CREATED';
  }
  @Get('no-content')
  @HttpCode(204)
  noContent() {}
  @Get('all/:id/test/:uuid')
  @Header('Cache-Control', 'none')
  getAll(
    @Query() query: string,
    @Param('id') id: string,
    @Param('uuid') par: string,
  ): string {
    console.log({ id, par });
    console.log(query['name'] === 'andrii');
    return 'GET ALL';
  }
  @Get('redirect')
  @Redirect('https://docs.nestjs.com', 302)
  redirect() {
    return 'Redirect';
  }
  @Get()
  async get(@Headers() headers: any, @HostParam() host: any): Promise<string> {
    console.log({ headers, host }); // Headers object
    return 'Async';
  }
  @Post('dto')
  createWithDto(@Body() mainDto: MainDto): string {
    console.log(mainDto);
    return 'Created';
  }
  @Get('specific')
  librarySpecific(@Res() response: Response, @Ip() ip: string) {
    response.status(HttpStatus.OK).json([{ name: 'Andrii', age: 38, ip }]);
  }
}
