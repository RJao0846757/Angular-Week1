import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {
  // Allows customization through input
  @Input() appHighlightOnFocus = '';
  constructor(private element: ElementRef) { }

  // Method for when element is focused
  @HostListener('focus') onFocus() {
    this.highlight(this.appHighlightOnFocus);
  }

  // Method for when element is unfocused
  @HostListener('blur') onBlur() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

}
