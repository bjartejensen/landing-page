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
import { ScrollToSectionDirective } from './directives/scroll-to-section.directive';
import { IntroComponent } from './components/ui/intro/intro.component';
import { SectionDirective } from './directives/intro-section.directive';
import { SandboxComponent } from './components/ui/sandbox/sandbox.component';
import { SandboxModule } from '../sandbox/sandbox.module';
import { SectionContentDirective } from './directives/section-content.directive';
import { SectionDescDirective } from './directives/section-desc.directive';
import { TwoColumnsDirective } from './directives/two-columns.directive';
import { SharedModule } from '../shared/shared.module';

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
    ScrollToSectionDirective,
    IntroComponent,
    SectionDirective,
    SandboxComponent,
    SectionContentDirective,
    SectionDescDirective,
    TwoColumnsDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    LandingPageRoutingModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    SandboxModule,
    SharedModule,
  ],
  exports: [FrontpageComponent],
})
export class LandingPageModule {}
