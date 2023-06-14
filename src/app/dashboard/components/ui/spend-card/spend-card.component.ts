import { PercentPipe } from '@angular/common';
import { Component } from '@angular/core';

type SpendItem = {
  name: string;
  allocation: number | string;
  percent: number;
};

@Component({
  selector: 'app-spend-card',
  templateUrl: './spend-card.component.html',
  styleUrls: ['./spend-card.component.scss'],
})
export class SpendCardComponent {
  headers: string[] = ['Spend Name', 'Allocation', 'Percent'];

  spendNames: SpendItem[] = [
    { name: 'Google Ads', allocation: '19.0M', percent: 0.29 },
    { name: 'Banners', allocation: '1.5M', percent: 0.02 },
    { name: 'Youtube', allocation: '2.7M', percent: 0.04 },
    { name: 'Social', allocation: '7.8M', percent: 0.12 },
    { name: 'Affiliates', allocation: '17.9M', percent: 0.28 },
    { name: 'Tv', allocation: '10.4M', percent: 0.16 },
    { name: 'Radio', allocation: '2.9M', percent: 0.04 },
    { name: 'Other', allocation: '2.9M', percent: 0.04 },
    { name: 'Total', allocation: '65.0M', percent: 1.0 },
  ];
}
