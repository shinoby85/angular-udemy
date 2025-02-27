import {Component, inject, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InvestmentService} from "../investment.service";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  investmentService = inject(InvestmentService);

  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');

  onCalculate() {
    this.investmentService.setCalculateData({
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration()
    })
  }
}
