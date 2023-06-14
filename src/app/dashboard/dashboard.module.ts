import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { ChartCardComponent } from './components/ui/chart-card/chart-card.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { OverlayModule } from '@angular/cdk/overlay';
import { SpendCardComponent } from './components/ui/spend-card/spend-card.component';
import { DataChartCardComponent } from './components/ui/data-chart-card/data-chart-card.component';
import { DataTableCardComponent } from './components/ui/data-table-card/data-table-card.component';
import { PieChartCardComponent } from './components/ui/pie-chart-card/pie-chart-card.component';
import { AreaChartCardComponent } from './components/ui/area-chart-card/area-chart-card.component';
import { BarChartCardComponent } from './components/ui/bar-chart-card/bar-chart-card.component';
import { LineChartCardComponent } from './components/ui/line-chart-card/line-chart-card.component';
import { ModalWrapperComponent } from './components/ui/modal-wrapper/modal-wrapper.component';
import { YaxisPipe } from '../shared/pipes/yaxis.pipe';

@NgModule({
  declarations: [
    FrontpageComponent,
    ChartCardComponent,
    SpendCardComponent,
    DataChartCardComponent,
    DataTableCardComponent,
    PieChartCardComponent,
    AreaChartCardComponent,
    BarChartCardComponent,
    LineChartCardComponent,
    ModalWrapperComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule,
    OverlayModule,
  ],
  providers: [YaxisPipe],
})
export class DashboardModule {}
