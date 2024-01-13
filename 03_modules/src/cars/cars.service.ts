import { Injectable } from '@nestjs/common';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class CarsService {
  constructor(private logger: LoggerService) {}
  create() {
    this.logger.logMessage('created');
    return 'CREATED';
  }
}