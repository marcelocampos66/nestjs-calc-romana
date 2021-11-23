import {
  Body,
  Controller,
  HttpCode,
  Param,
  Post,
  UseGuards,
  NotAcceptableException,
} from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('calculator')
export class CalculatorController {
  constructor(private calculatorService: CalculatorService) {}

  @UseGuards(JwtAuthGuard)
  @Post(':operation')
  @HttpCode(200)
  async calculator(
    @Param('operation') operation: string,
    @Body() digits: { array: string[] },
  ) {
    if (operation !== 'sum' && operation !== 'sub') {
      throw new NotAcceptableException();
    }
    return this.calculatorService.calculator(operation, digits.array);
  }
}
