import {Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appShow]'
})
export class ShowDirective implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    this.init(this.visibility);
  }

  @Input()
  visibility: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  init(value: boolean): void {
    if (value) {
      this.renderer.setStyle(this.el.nativeElement, 'visibility', 'visible');
    }
    else {
      this.renderer.setStyle(this.el.nativeElement, 'visibility', 'hidden');
    }
  }


}
