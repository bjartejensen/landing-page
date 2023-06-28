import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataValidationComponent } from './components/ui/data-validation/data-validation.component';

const routes: Routes = [
  {
    path: '',
    component: DataValidationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SandboxRoutingModule {}
