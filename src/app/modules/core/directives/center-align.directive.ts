import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCenterAlign]'
})
export class CenterAlignDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'justify-content-center');
    this.renderer.addClass(this.el.nativeElement, 'align-items-center');
  }

}
