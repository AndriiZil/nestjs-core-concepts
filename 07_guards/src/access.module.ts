import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { RolesGuard } from './guards/roles.gurad';

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  imports: [CatsModule, DogsModule],
  exports: [CatsModule, DogsModule],
})
export class AccessModule {}
