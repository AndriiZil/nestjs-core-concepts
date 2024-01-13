import { Module } from '@nestjs/common';
import { TransformController } from './transform.controller';
import { ValidationController } from './validation.controller';

@Module({
  controllers: [TransformController, ValidationController],
})
export class AppModule {}
