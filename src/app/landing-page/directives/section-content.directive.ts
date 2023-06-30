import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appSectionContent]',
})
export class SectionContentDirective {
  @HostBinding('class')
  get ResponsiveClasses(): string {
    return 'pi-m-15 pi-lg-0 pb-m-1 cw-lg-75 cw-xl-70';
  }
}
