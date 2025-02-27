import {Component, inject} from '@angular/core';
import {InvestmentService} from "../investment.service";
import {IAnnualData} from "../investment.model";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  investmentService = inject(InvestmentService);

  get annualData(): IAnnualData[] | undefined {
    return this.investmentService.getInvestmentResult();
  }
}
