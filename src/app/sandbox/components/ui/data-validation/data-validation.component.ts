import { Component, Input } from '@angular/core';

export type TMMMDataFileOutputStatusGlobal = {
  valid: boolean;
  nObs: number;
  nEmptyRows: number;
  validNObs: boolean;
  validNonNumeric: boolean;
  validNonNegative: boolean;
};

@Component({
  selector: 'app-data-validation',
  templateUrl: './data-validation.component.html',
  styleUrls: ['./data-validation.component.scss'],
})
export class DataValidationComponent {
  //#region @Input()

  @Input('validationData') set ValidationData(
    value: TMMMDataFileOutputStatusGlobal | null | undefined
  ) {
    if (value) {
      this.dataValidation = value;
    }
  }
  dataValidation: TMMMDataFileOutputStatusGlobal = {
    nEmptyRows: 2,
    nObs: 132,
    valid: true,
    validNObs: true,
    validNonNumeric: false,
    validNonNegative: false,
  };

  //#endregion

  //#region Getters

  get EnableNonNumeric(): boolean {
    return this.dataValidation.validNObs;
  }

  get EnableNonNegative(): boolean {
    return this.dataValidation.validNObs && this.dataValidation.validNonNumeric;
  }

  //#endregion
}
