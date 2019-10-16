import { Directive, ElementRef, OnInit, Renderer2,  } from '@angular/core';

@Directive({
  selector: '[appUnderscore]'
})
export class UnderscoreDirective implements OnInit {

  constructor(public el: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'underscore');
  }

}
