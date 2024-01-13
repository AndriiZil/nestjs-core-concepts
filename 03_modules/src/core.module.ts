import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { DriversModule } from './drivers/drivers.module';

@Module({
  imports: [CarsModule, DriversModule],
  exports: [CarsModule, DriversModule],
})
export class CoreModule {}
