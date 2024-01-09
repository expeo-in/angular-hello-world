import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
})
export class InputFormatDirective {
  constructor(private el: ElementRef) {}

  @Input('appInputFormat') format: string = '';

  @HostListener('blur') onBlur() {
    let input = this.el.nativeElement;
    let value: string = input.value;
    input.value =
      this.format === 'uppercase' ? value.toUpperCase() : value.toLowerCase();
  }

  @HostListener('focus') onFocus() {
    console.log('focus handled');
  }
}
