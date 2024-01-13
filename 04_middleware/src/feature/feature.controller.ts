import { Controller, Get } from '@nestjs/common';

@Controller('feature')
export class FeatureController {
  @Get()
  get() {
    return 'Feature';
  }
}
