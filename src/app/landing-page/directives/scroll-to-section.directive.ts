import { Directive, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[scrollToSection]',
  exportAs: 'scrollInstance',
})
export class ScrollToSectionDirective {
  private renderer = inject(Renderer2);

  public scrollToTarget(
    elementToScrollTo: HTMLElement | string,
    isSmooth: boolean = true
  ) {
    try {
      let htmlElement: HTMLElement | undefined =
        typeof elementToScrollTo == 'string'
          ? undefined
          : (elementToScrollTo as HTMLElement);

      if (typeof elementToScrollTo == 'string') {
        htmlElement = this.renderer.selectRootElement(
          '#' + elementToScrollTo,
          true
        );
      }

      if (!!htmlElement) {
        htmlElement!.scrollIntoView({
          block: 'center',
          behavior: isSmooth ? 'smooth' : 'auto',
        });
      }
    } catch (error) {
      console.error('Error in AtribScroll Directive');
    }
  }
}
