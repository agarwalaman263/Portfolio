import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appCenterAlign]'
})
export class CenterAlignDirective {

  constructor(private el: ElementRef,private renderer: Renderer) { }
  ngOnInit(): void {
    this.renderer.setElementClass(this.el.nativeElement,'justify-content-center',true);
    this.renderer.setElementClass(this.el.nativeElement,"align-items-center",true);
  }

}
