import { Controller, Post } from '@nestjs/common';
import { DriversService } from './drivers.service';

@Controller('drivers')
export class DriversController {
  constructor(private driversService: DriversService) {}
  @Post()
  create() {
    return this.driversService.create();
  }
}
