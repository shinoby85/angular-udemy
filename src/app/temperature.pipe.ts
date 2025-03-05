import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number | string, inputType: 'cel' | 'fah', outputType?: 'cel' | 'fah') {
    // if (type === 'celsius') {
    //   return value.map(item => item + ' C');
    //
    // } else if (type === 'fahrenheit') {
    //   return value.map(item => item * 9 / 5 + 32 + ' F');
    // }
    // return value.map(String);
    let val: number;
    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }
    let outputTemp: number;
    if (inputType === 'cel' && outputType === 'fah') {
      outputTemp = val * (9 / 5) + 32;
    } else if (inputType === 'fah' && outputType === 'cel') {
      outputTemp = (val - 32) * (5 / 9);
    } else {
      outputTemp = val;
    }
    let symbol: 'C' | 'F';

    if (!outputType) {
      symbol = inputType === 'cel' ? 'C' : 'F';
    } else {
      symbol = outputType === 'fah' ? 'F' : 'C';
    }

    return `${outputTemp.toFixed(2)} ${symbol}`;
  }

}
