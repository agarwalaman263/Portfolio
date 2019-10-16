import { Directive, HostListener, ElementRef, Input, Renderer, Renderer2 } from '@angular/core';

@Directive({
  selector: '[parallax]'
})
export class ParallaxDirective {


  constructor(private eleRef: ElementRef, private renderer: Renderer2) {
  }
  public menuPosition: any;
  ngAfterViewInit() {
    this.menuPosition = this.eleRef.nativeElement.offsetTop;
  }
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.menuPosition) {
      this.renderer.addClass(this.eleRef.nativeElement, 'sticky');
    } else {
      this.renderer.removeClass(this.eleRef.nativeElement, 'sticky');
    }
  }

}
