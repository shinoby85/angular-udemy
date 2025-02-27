import {Injectable} from '@angular/core';
import {IAnnualData, ICalculateData} from "./investment.model";
import {calculateInvestmentResults} from "../investment-results";

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  private _calculateData?: ICalculateData;

  setCalculateData(data: ICalculateData) {
    this._calculateData = {...data};
  }

  getInvestmentResult(): IAnnualData[] | undefined {
    if (this._calculateData) {
      return calculateInvestmentResults(this._calculateData);
    }
    return undefined;
  }
}
