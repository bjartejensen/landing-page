import { Component } from '@angular/core';
import { reveal } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-how',
  templateUrl: './how.component.html',
  styleUrls: ['./how.component.scss'],
  animations: [reveal],
})
export class HowComponent {}
