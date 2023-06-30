import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TSelectedComponent } from 'src/app/shared/types/types';

@Component({
  selector: 'sandbox-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss'],
})
export class FrontpageComponent {
  //#region Observables

  selectedComponentSubject = new BehaviorSubject<TSelectedComponent>(
    'line-chart'
  );
  selectedComponent$: Observable<TSelectedComponent> =
    this.selectedComponentSubject.asObservable();

  //#endregion

  //#region Helpers

  menuItems = new Map<string, TSelectedComponent>([
    ['Data Validation', 'data-validation'],
    ['Line chart', 'line-chart'],
  ]);

  //#endregion

  //#region Public Event handlers

  onComponentSelected(selectedComponent?: TSelectedComponent) {
    this.selectedComponentSubject.next(selectedComponent!);
  }

  //#endregion
}
