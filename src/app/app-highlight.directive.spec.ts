import { AppHighlightDirective } from './app-highlight.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('AppHighlightDirective', () => {
  let elementRef: ElementRef;
  let renderer: Renderer2;

  beforeEach(() => {
    elementRef = new ElementRef(document.createElement('div'));
    renderer = jasmine.createSpyObj('Renderer2', ['addClass', 'removeClass']);
  });

  it('should create an instance', () => {
    const directive = new AppHighlightDirective(elementRef, renderer);
    expect(directive).toBeTruthy();
  });
});
