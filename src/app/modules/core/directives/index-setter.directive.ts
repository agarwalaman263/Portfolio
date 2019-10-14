import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appIndexSetter]'
})
export class IndexSetterDirective {
@Input('index') index;
  constructor(private el:ElementRef) { }
  ngOnInit(): void {
    this.el.nativeElement.style.zIndex=this.index;
  }

}
