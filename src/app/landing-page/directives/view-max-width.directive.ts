import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appViewMaxWidth]',
})
export class ViewMaxWidthDirective {
  @HostBinding('style.width')
  get clsList(): string {
    return 'min(100vw,2000px)';
  }
}
