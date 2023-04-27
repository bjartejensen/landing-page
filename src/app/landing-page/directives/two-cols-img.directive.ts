import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTwoColsImg]',
})
export class TwoColsImgDirective {
  @HostBinding('class')
  get clsList(): string {
    return 'p-m-1 p-sm-2 p-md-2 p-lg-4 p-xl-5';
  }
}
