import { Component, OnInit } from '@angular/core';

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
  selector: 'app-bar-chart-card',
  templateUrl: './bar-chart-card.component.html',
  styleUrls: ['./bar-chart-card.component.scss'],
})
export class BarChartCardComponent implements OnInit {
  public chartConfig!: Partial<ChartOptions>;

  ngOnInit(): void {
    this.chartConfig = {
      chart: {
        id: 'spark1',
        group: 'sparks',
        type: 'bar',
        width: '90%',
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
          color: 'hsl(204, 47%, 55%)',
          data: [5, 15, 35, 65, 105],
        },
      ],
      fill: {
        type: 'gradient',
        gradient: {
          gradientToColors: ['hsl(204, 47%, 68%)'],
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
