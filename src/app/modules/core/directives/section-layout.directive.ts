import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[sectionLayout]'
})
export class SectionLayoutDirective {

  constructor(private el:ElementRef,private renderer: Renderer) { 
  }
  @Input() sectionLayout:string;
  ngOnInit(): void {
    console.log(this.sectionLayout)
    this.renderer.setElementClass(this.el.nativeElement,'basicLayout',true);
    this.el.nativeElement.style.background=this.sectionLayout;
  }

}
