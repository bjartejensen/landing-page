import { Directive, HostBinding, inject, Input } from '@angular/core';
import { IMaxWidthConfig } from '../interfaces/config.interface';
import { MAX_WIDTH_CONFIG_TOKEN } from '../config/config.token';

@Directive({
  selector: '[appMaxWidth]',
})
export class MaxWidthDirective {
  //#region D.I

  private maxWidthConfig: IMaxWidthConfig = inject(MAX_WIDTH_CONFIG_TOKEN);

  //#endregion

  //#region @Input
  @Input() forceMaxWidth?: string;

  //#endregion

  //#region @Hostbinding

  //@HostBinding('style.background-color') bgc = 'orange';
  @HostBinding('style.width')
  get clsList(): string {
    return this.forceMaxWidth
      ? `min(100vw,${this.forceMaxWidth})`
      : `min(100vw,${this.maxWidthConfig.maxWidth})`;
  }

  //#endregion
}
