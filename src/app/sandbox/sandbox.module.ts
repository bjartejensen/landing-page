import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SandboxRoutingModule } from './sandbox-routing.module';
import { DataValidationComponent } from './components/ui/data-validation/data-validation.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [DataValidationComponent, FrontpageComponent],
  imports: [
    CommonModule,
    SandboxRoutingModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
    DashboardModule,
  ],
  exports: [FrontpageComponent],
})
export class SandboxModule {}
