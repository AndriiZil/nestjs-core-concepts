import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  OnApplicationShutdown,
  OnApplicationBootstrap,
  BeforeApplicationShutdown,
} from '@nestjs/common';
import { Subject } from 'rxjs';

/**
 * The hooks executes in correct order
 */
@Injectable()
export class AppService
  implements
    OnModuleInit,
    OnModuleDestroy,
    OnApplicationShutdown,
    OnApplicationBootstrap,
    BeforeApplicationShutdown
{
  private shutdownListener$: Subject<void> = new Subject();
  onModuleInit() {
    console.log('onModuleInit');
  }
  onApplicationBootstrap() {
    console.log('onApplicationBootstrap');
  }
  onModuleDestroy() {
    console.log('onModuleDestroy');
  }
  beforeApplicationShutdown() {
    console.log('beforeApplicationShutdown');
  }
  onApplicationShutdown() {
    console.log('onApplicationShutdown');
  }

  // Subscribe to the shutdown in your main.ts
  subscribeToShutdown(shutdownFn: () => void): void {
    this.shutdownListener$.subscribe(() => shutdownFn());
  }

  // Emit the shutdown event
  shutdown() {
    this.shutdownListener$.next();
  }
}
