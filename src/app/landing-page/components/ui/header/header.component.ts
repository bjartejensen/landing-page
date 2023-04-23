import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TSelectedPage } from '../../frontpage/frontpage.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() isSmallScreen: boolean | null = true;
  @Output() selectedPageEmitter = new EventEmitter<TSelectedPage>();

  @Output() activateMobileMenuEmitter = new EventEmitter<boolean>();
}
