import { Component, Input, OnInit } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexFill,
  ApexTheme,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  fill: ApexFill;
  theme: ApexTheme;
};

@Component({
  selector: 'app-chart-card',
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.scss'],
})
export class ChartCardComponent implements OnInit {
  @Input() title!: string;

  public chartConfig!: Partial<ChartOptions>;

  ngOnInit(): void {
    this.chartConfig = {
      chart: {
        id: 'spark1',
        group: 'sparks',
        type: 'area',
        sparkline: {
          enabled: true,
        },

        dropShadow: {
          enabled: false,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
      },
      series: [
        {
          color: 'red',
          data: [25, 66, 41, 89, 0],
        },
        // {
        //   color: 'green',
        //   data: [15, 36, 71, 39, 20],
        // },
      ],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          shade: '',
          opacityFrom: 0.95,
          opacityTo: 0.2,
          stops: [0, 100],
        },
      },
      stroke: {
        curve: 'smooth',
      },
      tooltip: {
        enabled: false,
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function formatter(val) {
              return '';
            },
          },
        },
      },
    };
  }
}
