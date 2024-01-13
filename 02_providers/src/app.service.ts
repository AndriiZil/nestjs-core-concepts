import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly frames: Array<string> = [];
  get(): string[] {
    return this.frames;
  }
  create(app: string) {
    this.frames.push(app);
  }
}
