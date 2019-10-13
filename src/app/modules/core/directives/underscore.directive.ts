import { Directive, ElementRef, OnInit, Renderer,  } from '@angular/core';

@Directive({
  selector: '[underscore]'
})
export class UnderscoreDirective implements OnInit{

  constructor(public el:ElementRef, private renderer: Renderer) { }
  ngOnInit(){
    this.renderer.setElementClass(this.el.nativeElement,'underscore',true);
  }

}
