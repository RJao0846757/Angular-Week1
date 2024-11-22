import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true
})
export class HoverHighlightDirective {

  // receives a colour from parent component
  @Input() appHoverHighlight = '';

  constructor(private element: ElementRef) { }

  // Method for when element is hovered over
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHoverHighlight || 'grey');
  }

  // Method for when element is no longer being hovered over
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
