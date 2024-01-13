import { Injectable } from '@nestjs/common';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class DriversService {
  constructor(private logger: LoggerService) {}
  create() {
    this.logger.logMessage('DriversService');
    return 'DriversService';
  }
}