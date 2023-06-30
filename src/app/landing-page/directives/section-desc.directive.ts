import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appSectionDesc]',
})
export class SectionDescDirective {
  @HostBinding('class')
  get ResponsiveClasses(): string {
    return 'mb-m-15 fs-m-125 lh-m-175 fs-lg-1 lh-lg-15';
  }
}
