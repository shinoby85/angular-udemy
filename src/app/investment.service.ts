import {Injectable, signal} from '@angular/core';
import {IAnnualData, ICalculateData} from "./investment.model";
import {calculateInvestmentResults} from "../investment-results";

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  private _calculateData = signal<ICalculateData | undefined>(undefined);

  setCalculateData(data: ICalculateData) {
    this._calculateData.set({...data});
  }

  getInvestmentResult(): IAnnualData[] | undefined {
    const calculateData = this._calculateData();
    if (calculateData) {
      return calculateInvestmentResults(calculateData);
    }
    return undefined;
  }
}
