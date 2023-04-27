import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { TSelectedPage } from '../../frontpage/frontpage.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  @Input() navItems!: Map<string, TSelectedPage>;
  @Output() selectedPageEmitter = new EventEmitter<TSelectedPage>();
}
