import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appButton]',
})
export class ButtonDirective {
  @Input('textColor') color?: string;
  @HostBinding('style.color')
  get clr() {
    return this.color ?? 'white';
  }

  @HostBinding('class')
  get clsList(): string {
    return 'button fs-md-1 h-md-4 pi-md-1';
  }
}
