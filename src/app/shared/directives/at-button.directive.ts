import { Directive, Host, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appAtButton]',
})
export class AtButtonDirective {
  @Input('atColor') color: 'primary' | 'accent' | 'warn' = 'primary';

  @HostBinding('style.display') d = 'block';
  @HostBinding('style.border-radius') br = '100vmax';
  @HostBinding('style.font-weight') fw = 300;
  @HostBinding('style.letter-spacing') ls = '0.5px';
  @HostBinding('style.padding-inline') pi = '1rem';

  @HostBinding('class')
  get AtBtnClsName(): string {
    return `at-btn at-btn-${this.color}`;
  }
}
