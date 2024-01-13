import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';

import { AppController } from './app.controller';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { CarsController } from './cars.controller';
import { FeatureModule } from './feature/feature.module';

@Module({
  providers: [],
  imports: [FeatureModule],
  controllers: [AppController, CarsController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        { path: 'app', method: RequestMethod.POST },
        { path: 'app', method: RequestMethod.PUT },
      )
      // .forRoutes('app', 'cars');
      .forRoutes(AppController, CarsController); // the same as .forRoutes('app', 'cars');
  }
}
