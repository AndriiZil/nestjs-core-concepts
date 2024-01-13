import { Module } from '@nestjs/common';
import { LoggerModule } from '../logger/logger.module';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  imports: [LoggerModule],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
