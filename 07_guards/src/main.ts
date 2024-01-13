import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { RolesGuard } from './guards/roles.gurad';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalGuards(new RolesGuard()); // Global implementation
  await app.listen(3000);
}
bootstrap();
