import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMaxWidth]',
})
export class MaxWidthDirective {
  @HostBinding('style.width')
  get clsList(): string {
    return 'min(100vw,2000px)';
  }
}
