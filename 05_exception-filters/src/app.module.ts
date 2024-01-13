import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { CarsModule } from './cars/cars.module';
import { DogsModule } from './dogs/dogs.module';

@Module({
  imports: [CarsModule, DogsModule],
  controllers: [AppController],
})
export class AppModule {}
