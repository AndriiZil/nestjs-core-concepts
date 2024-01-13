import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthController } from './auth.controller';
import { AccessModule } from './access.module';

@Module({
  imports: [AccessModule],
  controllers: [AppController, AuthController],
})
export class AppModule {}
