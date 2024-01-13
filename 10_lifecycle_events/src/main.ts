import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks(); // Starts listening for shutdown hooks
  app.get(AppService).subscribeToShutdown(() => app.close()); // Subscribe to shutdown() and Emit event
  await app.listen(3000);
}
bootstrap();
