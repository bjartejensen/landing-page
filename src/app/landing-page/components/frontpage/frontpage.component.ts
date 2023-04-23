import {
  MediaMatcher,
  BreakpointObserver,
  Breakpoints,
} from '@angular/cdk/layout';
import { Component, inject, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

export type TSelectedPage = 'home' | 'why' | 'how';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss'],
})
export class FrontpageComponent {
  breakPointObserver = inject(BreakpointObserver);
  isSmallScreen: boolean =
    this.breakPointObserver.isMatched('(max-width: 599px)');

  isSmallScreen$: Observable<boolean> = this.breakPointObserver
    .observe(Breakpoints.XSmall)
    .pipe(map((x) => x.matches));

  selectedPageSubject = new BehaviorSubject<TSelectedPage>('home');
  selectedPage$: Observable<TSelectedPage> =
    this.selectedPageSubject.asObservable();

  onPageSelected(selectedPage: TSelectedPage) {
    this.selectedPageSubject.next(selectedPage);
  }

  activateMobileMenu: boolean = false;

  onActivateMobileMenuChanged(shouldActivateMobileMenu: boolean) {
    this.activateMobileMenu = shouldActivateMobileMenu;
  }
}
