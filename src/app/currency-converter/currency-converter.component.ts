import { Component } from '@angular/core';
import { CurrencyConverterPipePipe } from '../pipe/currency-converter-pipe.pipe';

@Component({
  selector: 'app-currency-converter',
  imports: [CurrencyConverterPipePipe],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.css',
})
export class CurrencyConverterComponent {
  amount = 10;
}
