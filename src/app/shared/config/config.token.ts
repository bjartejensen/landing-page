import { InjectionToken } from '@angular/core';
import { IMaxWidthConfig } from '../interfaces/config.interface';

export const MAX_WIDTH_CONFIG_TOKEN: InjectionToken<IMaxWidthConfig> =
  new InjectionToken('MAX_WIDTH_CONFIG_TOKEN', {
    factory(): IMaxWidthConfig {
      return { maxWidth: '2000px' };
    },
  });
