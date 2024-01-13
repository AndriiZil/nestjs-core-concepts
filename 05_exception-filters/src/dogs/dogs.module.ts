import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { HttpExceptionFilter } from '../cutomExceptions/http-exception.filter';

@Module({
  providers: [
    {
      provide: 'APP_FILTER',
      useClass: HttpExceptionFilter,
    },
  ],
  controllers: [DogsController],
})
export class DogsModule {}
