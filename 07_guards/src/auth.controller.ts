import { Controller, Post, UseGuards } from '@nestjs/common';
import { RolesGuard } from './guards/roles.gurad';

@Controller('auth')
// @UseGuards(RolesGuard)
// @UseGuards(new RolesGuard())
export class AuthController {
  @Post()
  auth() {
    return 'auth';
  }
}
