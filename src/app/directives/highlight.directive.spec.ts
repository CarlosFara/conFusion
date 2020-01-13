import { HighlightDirective } from './highlight.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('HighlightDirective', () => {
  let elem: ElementRef;
  let renderer: Renderer2;

  it('should create an instance', () => {
    const directive = new HighlightDirective(elem, renderer);
    expect(directive).toBeTruthy();
  });
});
