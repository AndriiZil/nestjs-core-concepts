import { Get, Post, Body, HttpCode, Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private appService: AppService) {}
  @Get()
  getAll() {
    return this.appService.get();
  }
  @HttpCode(201)
  @Post()
  create(@Body('app') app: string) {
    console.log({ app }); // { app: 'ReactJS' }
    this.appService.create(app);
  }
}
