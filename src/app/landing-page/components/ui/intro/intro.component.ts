import { Component, EventEmitter, Output } from '@angular/core';
import { reveal } from 'src/app/shared/animations/animations';
import { TSelectedPage } from 'src/app/shared/types/types';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  animations: [reveal],
})
export class IntroComponent {
  @Output() selectedPageEmitter = new EventEmitter<TSelectedPage>();
}
