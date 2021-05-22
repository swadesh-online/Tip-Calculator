import { Component } from '@angular/core';
import { instance } from './instance';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedInstance: instance;
  satisfaction: Array<{ percent: number, text: string }>;
  result: string;
  validBill: boolean;
  validSatisfaction: boolean;
  validSplit: boolean;
  validButton: boolean;
  constructor() {
    this.validBill = false;
    this.validSatisfaction = false;
    this.validSplit = false;
    this.validButton = false;
    this.satisfaction = [{ percent: 25, text: "25% of Bill - Excellent" },
    { percent: 20, text: "20% of Bill - Outstanding" },
    { percent: 10, text: "10% of Bill - Good" },
    { percent: 5, text: "5% of Bill - Average" }];
    this.selectedInstance =
    {
      totalBill: 0,
      satisfactionPercent: 0,
      split: 1
    }
    this.result = '';
  }
  ngOnInit() {
  }
  calculate() {
    var fullTip = this.selectedInstance.totalBill * (this.selectedInstance.satisfactionPercent / 100);
    var eachTip = fullTip / this.selectedInstance.split;
    this.result = eachTip.toString();

  }
  reset() {
    this.selectedInstance =
    {
      totalBill: 0,
      satisfactionPercent: 0,
      split: 1
    }
    this.validBill = false;
    this.validSatisfaction = false;
    this.validSplit = false;
    this.validButton = false;
    this.result = '';
  }

  validate() {
    this.result = '';
    if (this.selectedInstance.totalBill != null && this.selectedInstance.totalBill > 0) {
      this.validBill = true;
    } else {
      this.validBill = false;
    }
    if (this.validBill && (this.selectedInstance.satisfactionPercent != null && this.selectedInstance.satisfactionPercent > 0)) {
      this.validSatisfaction = true;
    } else {
      this.validSatisfaction = false;
    }
    if (this.validSatisfaction && (this.selectedInstance.split != null && this.selectedInstance.split > 0)) {
      this.validSplit = true;
    } else {
      this.validSplit = false;
    }
    if (this.validSplit) {
      this.validButton = true;
    } else {
      this.validButton = false;
    }

  }
}
