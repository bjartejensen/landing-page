import { Component } from '@angular/core';
import { reveal } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss'],
  animations: [reveal],
})
export class FrontpageComponent {
  isOpen = false;
}
