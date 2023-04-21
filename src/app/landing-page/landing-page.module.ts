import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { HomeComponent } from './components/ui/home/home.component';
import { WhyComponent } from './components/ui/why/why.component';
import { HowComponent } from './components/ui/how/how.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/ui/footer/footer.component';

@NgModule({
  declarations: [
    FrontpageComponent,
    HeaderComponent,
    HomeComponent,
    WhyComponent,
    HowComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule, LandingPageRoutingModule],
  exports: [FrontpageComponent],
})
export class LandingPageModule {}
