import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SandboxRoutingModule } from './sandbox-routing.module';
import { DataValidationComponent } from './components/ui/data-validation/data-validation.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DataValidationComponent],
  imports: [CommonModule, SandboxRoutingModule, MatButtonModule, MatIconModule],
})
export class SandboxModule {}
