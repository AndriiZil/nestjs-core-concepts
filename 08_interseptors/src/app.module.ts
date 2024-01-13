import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './interceptors';
import {
  ExampleController1,
  ExampleController2,
  ExampleController3,
  ExampleController4,
  ExampleController5,
} from './controllers';

/**
 * When using this approach to perform dependency injection for the interceptor, note that regardless of the module
 * where this construction is employed, the interceptor is, in fact, global
 */
@Module({
  providers: [
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: LoggingInterceptor,
    // },
  ],
  controllers: [
    AppController,
    ExampleController1,
    ExampleController2,
    ExampleController3,
    ExampleController4,
    ExampleController5,
  ],
})
export class AppModule {}
