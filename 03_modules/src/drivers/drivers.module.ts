import { Module } from '@nestjs/common';
import { LoggerModule } from '../logger/logger.module';
import { DriversController } from './drivers.controller';
import { DriversService } from './drivers.service';

@Module({
  imports: [LoggerModule],
  controllers: [DriversController],
  providers: [DriversService],
})
export class DriversModule {}