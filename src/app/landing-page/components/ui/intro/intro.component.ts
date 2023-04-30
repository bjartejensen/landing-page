import { Component, EventEmitter, Output } from '@angular/core';
import { TSelectedPage } from '../../frontpage/frontpage.component';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent {
  @Output() selectedPageEmitter = new EventEmitter<TSelectedPage>();
}
