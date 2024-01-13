import helmet from 'helmet';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { FeatureController } from './feature.controller';
import { simpleMiddleware } from '../middlewares/simple.middleware';

@Module({
  controllers: [FeatureController],
})
export class FeatureModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(simpleMiddleware, helmet()).forRoutes(FeatureController);
  }
}
