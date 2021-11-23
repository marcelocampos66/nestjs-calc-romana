import { Injectable } from '@nestjs/common';
import { romans } from './constants';

type Op = 'sum' | 'sub';

@Injectable()
export class CalculatorService {
  getDigitValue(digit: string): number {
    if (Object.keys(romans).includes(digit)) {
      return romans[digit];
    }
    const splitedDigit = digit.split('');
    return splitedDigit.reduce((result, digit) => {
      return result + romans[digit];
    }, 0);
  }

  calculator(op: Op, digits: string[]): number {
    const numericDigits: number[] = digits.map(this.getDigitValue);
    if (op === 'sub') {
      return numericDigits.reduce((result, number) => {
        return result - number;
      }, 0);
    }
    return numericDigits.reduce((result, number) => {
      return result + number;
    }, 0);
  }
}
