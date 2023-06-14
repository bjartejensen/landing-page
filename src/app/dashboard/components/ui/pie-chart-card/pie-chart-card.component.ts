import { Component, OnInit } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTooltip,
  ApexFill,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  tooltip: ApexTooltip;
  labels: any;
  fill: ApexFill;
};

@Component({
  selector: 'app-pie-chart-card',
  templateUrl: './pie-chart-card.component.html',
  styleUrls: ['./pie-chart-card.component.scss'],
})
export class PieChartCardComponent implements OnInit {
  public chartOptions!: Partial<ChartOptions>;

  ngOnInit(): void {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: 'donut',
        width: '100%',
        //height: 100,
        sparkline: {
          enabled: true,
        },
      },
      responsive: [{ breakpoint: 1700, options: { height: 400 } }],
      fill: {
        colors: [
          'hsl(102, 52%, 94%)',
          'hsl(102, 51%, 73%)',
          'hsl(102, 50%, 53%)',
          'hsl(103, 64%, 43%)',
          'hsl(107, 80%, 32%)',
        ],
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: true,
          shade: '',
          opacityFrom: 0.95,
          opacityTo: 0.62,
          stops: [0, 100],
        },
      },
      tooltip: {
        enabled: false,
        fixed: {
          enabled: false,
        },
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            },
          },
        },
        marker: {
          show: false,
        },
      },
    };
  }
}
