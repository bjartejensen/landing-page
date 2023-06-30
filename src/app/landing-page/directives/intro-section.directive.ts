import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appSection]',
})
export class SectionDirective {
  @HostBinding('className')
  get ResponsiveClasses(): string {
    return 'mb-m-0 mt-m-25 mt-lg-5 pb-lg-2';
  }
}
