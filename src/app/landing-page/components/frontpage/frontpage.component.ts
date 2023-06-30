import {
  MediaMatcher,
  BreakpointObserver,
  Breakpoints,
} from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { TSelectedPage } from 'src/app/shared/types/types';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontpageComponent {
  //#region D.I.

  breakPointObserver = inject(BreakpointObserver);

  //#endregion

  //#region Observables

  isSmallScreen$: Observable<boolean> = this.breakPointObserver
    .observe(['(max-width: 699px)'])
    .pipe(map((x) => x.matches));

  selectedPageSubject = new BehaviorSubject<TSelectedPage>('home');
  selectedPage$: Observable<TSelectedPage> =
    this.selectedPageSubject.asObservable();

  //#endregion

  //#region Helpers
  mobileMenuActive: boolean = false;

  menuItems = new Map<string, TSelectedPage>([
    ['Home', 'home'],
    ['Why', 'why'],
    ['How', 'how'],
    ['Sandbox', 'sandbox'],
  ]);

  //#endregion

  //#region Public Event handlers

  onPageSelected(selectedPage: TSelectedPage) {
    this.selectedPageSubject.next(selectedPage);
  }

  onActivateMobileMenuChanged(mobileMenuActive: boolean) {
    this.mobileMenuActive = mobileMenuActive;
  }

  //#endregion
}
