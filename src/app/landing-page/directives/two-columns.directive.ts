import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTwoColumns]',
})
export class TwoColumnsDirective {
  @HostBinding('class')
  get ResponsiveClasses(): string {
    return 'ai-lg-center ji-lg-center mi-lg-5';
  }
}
