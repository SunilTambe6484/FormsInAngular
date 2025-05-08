import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverterPipe',
})
export class CurrencyConverterPipePipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    console.log(args);
    return value * 74.5; // Assuming 1 USD = 74.5 INR
  }
}
