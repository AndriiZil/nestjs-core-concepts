import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
import { ZodValidationPipe } from './shemas/shema.validator';
import { CreateAppDto, createAppSchema } from './shemas/create.app.shema';
import { CreateDogDto } from './dto/create-dog.dto';
import { ParseIntPipe } from './pipes/parse-int.pipe';

@Controller('validation')
export class ValidationController {
  @Post()
  // createClassValidation(@Body(new ValidationPipe()) createDto: CreateDogDto) {
  //   console.log({ createDto });
  // }
  createClassValidation(@Body() createDto: CreateDogDto) {
    // Now we are using Pipe globally
    console.log({ createDto });
  }
  @Post('one')
  @UsePipes(new ZodValidationPipe(createAppSchema))
  create(@Body() createDto: CreateAppDto) {
    console.log({ createDto });
    console.log('created');
  }

  @Get(':id')
  async findOneValidation(@Param('id', new ParseIntPipe()) id) {
    console.log({ id });
  }
}