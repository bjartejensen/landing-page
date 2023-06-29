import { Component } from '@angular/core';
import { reveal } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.scss'],
  animations: [reveal],
})
export class WhyComponent {}
