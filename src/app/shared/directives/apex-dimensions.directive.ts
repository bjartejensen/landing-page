import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appApexDimensions]',
})
export class ApexDimensionsDirective {
  @HostBinding('style.max-width') maxw = '1000px';
  @HostBinding('style.min-width') minw = '500px';
}
