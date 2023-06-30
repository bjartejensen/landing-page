import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { TSelectedPage } from 'src/app/shared/types/types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() navItems!: Map<string, TSelectedPage>;
  @Input() isSmallScreen: boolean | null = true;
  @Input() mobileMenuActive!: boolean;
  @Output() activateMobileMenuEmitter = new EventEmitter<boolean>();
  @Output() selectedPageEmitter = new EventEmitter<TSelectedPage>();
}
