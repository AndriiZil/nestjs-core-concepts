import { Controller, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private carService: CarsService) {}
  @Post()
  create() {
    return this.carService.create();
  }
}