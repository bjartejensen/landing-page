import { Component, EventEmitter, Output } from '@angular/core';
import { TSelectedPage } from '../../frontpage/frontpage.component';
import { reveal } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  animations: [reveal],
})
export class IntroComponent {
  @Output() selectedPageEmitter = new EventEmitter<TSelectedPage>();
}
