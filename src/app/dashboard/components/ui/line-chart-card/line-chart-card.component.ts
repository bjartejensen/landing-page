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
  ApexOptions,
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
  options: ApexOptions;
};

@Component({
  selector: 'app-line-chart-card',
  templateUrl: './line-chart-card.component.html',
  styleUrls: ['./line-chart-card.component.scss'],
})
export class LineChartCardComponent implements OnInit {
  public chartConfig!: Partial<ChartOptions>;

  ngOnInit(): void {
    this.chartConfig = {
      chart: {
        id: 'spark1',
        group: 'sparks',
        type: 'line',
        width: '100%',
        height: 200,
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
          data: [25, 100, 70, 90, 50],
        },
        {
          color: 'hsl(102, 50%, 53%)',
          data: [15, 110, 60, 80, 64],
        },
      ],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          shade: '',
          opacityFrom: 0.95,
          opacityTo: 0.5,
          stops: [50, 100],
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
