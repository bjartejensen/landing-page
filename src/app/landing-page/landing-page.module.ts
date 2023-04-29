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
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { CardComponent } from './components/ui/card/card.component';
import { TwoColsImgDirective } from './directives/two-cols-img.directive';
import { ViewMaxWidthDirective } from './directives/view-max-width.directive';
import { ScrollToSectionDirective } from './directives/scroll-to-section.directive';
import { ButtonDirective } from './directives/button.directive';
import { IntroComponent } from './components/ui/intro/intro.component';
import { IntroSectionDirective } from './directives/intro-section.directive';

@NgModule({
  declarations: [
    FrontpageComponent,
    HeaderComponent,
    HomeComponent,
    WhyComponent,
    HowComponent,
    FooterComponent,
    CardComponent,
    TwoColsImgDirective,
    ViewMaxWidthDirective,
    ScrollToSectionDirective,
    ButtonDirective,
    IntroComponent,
    IntroSectionDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    LandingPageRoutingModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule,
  ],
  exports: [FrontpageComponent],
})
export class LandingPageModule {}
