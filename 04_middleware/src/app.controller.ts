import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('app')
export class AppController {
  @Get()
  getAll() {
    return 'all';
  }
  @Post()
  create() {
    return 'created';
  }
  @Put()
  update() {
    return 'update';
  }
}
