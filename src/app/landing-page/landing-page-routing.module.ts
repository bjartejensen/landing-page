import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { WhyComponent } from './components/ui/why/why.component';
import { HowComponent } from './components/ui/how/how.component';

const routes: Routes = [
  {
    path: '',
    component: FrontpageComponent,
  },
  {
    path: 'home',
    component: FrontpageComponent,
  },
  {
    path: 'why',
    component: WhyComponent,
  },
  {
    path: 'how',
    component: HowComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
