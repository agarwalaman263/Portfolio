import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appIndexSetter]'
})
export class IndexSetterDirective implements OnInit {
@Input('index') index;
  constructor(private el: ElementRef) { }
  ngOnInit(): void {
    this.el.nativeElement.style.zIndex = this.index;
  }

}
