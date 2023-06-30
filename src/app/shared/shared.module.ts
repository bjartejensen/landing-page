import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealWrapComponent } from './components/reveal-wrap/reveal-wrap.component';
import { AtButtonDirective } from './directives/at-button.directive';
import { MaxWidthDirective } from './directives/max-width.directive';
import { LineChartCardComponent } from './components/line-chart-card/line-chart-card.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexDimensionsDirective } from './directives/apex-dimensions.directive';

@NgModule({
  declarations: [
    RevealWrapComponent,
    AtButtonDirective,
    MaxWidthDirective,
    LineChartCardComponent,
    ApexDimensionsDirective,
  ],
  imports: [CommonModule, NgApexchartsModule],
  exports: [
    RevealWrapComponent,
    AtButtonDirective,
    MaxWidthDirective,
    LineChartCardComponent,
    ApexDimensionsDirective,
  ],
})
export class SharedModule {}
