import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { reveal } from '../../animations/animations';

@Component({
  selector: 'reveal-wrap',
  template: `
    <div
      class="container"
      [@reveal]="{
        value: ':enter',
        params: {
          offsetX: offsetX,
          offsetY: offsetY,
          delay: animationDelay,
          speed: animationSpeed
        }
      }"
    >
      <ng-content></ng-content>
    </div>
  `,
  styles: [],
  animations: [reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RevealWrapComponent {
  @Input() offsetXPct: number = 0;
  @Input() offsetYPct: number = 0;
  @Input() speed: number = 150;
  @Input() delay: number = 0;
  @Input() isClick: boolean = false;

  get offsetX(): string {
    return `${this.offsetXPct}%`;
  }

  get offsetY(): string {
    return `${this.offsetYPct}%`;
  }

  get animationSpeed(): string {
    return `${this.isClick ? 200 : this.speed}ms`;
  }

  get animationDelay(): string {
    return `${this.delay}ms`;
  }
}
