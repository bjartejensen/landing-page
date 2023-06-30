import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealWrapComponent } from './components/reveal-wrap/reveal-wrap.component';
import { AtButtonDirective } from './directives/at-button.directive';
import { MaxWidthDirective } from './directives/max-width.directive';

@NgModule({
  declarations: [RevealWrapComponent, AtButtonDirective, MaxWidthDirective],
  imports: [CommonModule],
  exports: [RevealWrapComponent, AtButtonDirective, MaxWidthDirective],
})
export class SharedModule {}
