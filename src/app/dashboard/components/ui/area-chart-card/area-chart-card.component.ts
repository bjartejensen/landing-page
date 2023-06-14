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
  selector: 'app-area-chart-card',
  templateUrl: './area-chart-card.component.html',
  styleUrls: ['./area-chart-card.component.scss'],
})
export class AreaChartCardComponent implements OnInit {
  public chartConfig!: Partial<ChartOptions>;

  ngOnInit(): void {
    this.chartConfig = {
      chart: {
        animations: { speed: 400, easing: 'easeinout' },
        id: 'spark1',
        group: 'sparks',
        type: 'area',
        stacked: true,
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
          color: 'hsl(207, 88%, 32%)',
          data: [25, 66, 41, 89, 0],
        },
        {
          color: 'hsl(104, 68%, 40%)',
          data: [45, 86, 61, 109, 20],
        },
      ],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          shade: '',
          opacityFrom: 0.95,
          opacityTo: 0.2,
          stops: [10, 100],
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
