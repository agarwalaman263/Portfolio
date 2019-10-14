import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './components/headers/headers.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { UnderscoreDirective } from './directives/underscore.directive';
import { SectionLayoutDirective } from './directives/section-layout.directive';
import { CenterAlignDirective } from './directives/center-align.directive';
import { ParallaxDirective } from './directives/parallax.directive';
import { IndexSetterDirective } from './directives/index-setter.directive';

@NgModule({
  declarations: [HeadersComponent, ProgressBarComponent, UnderscoreDirective, SectionLayoutDirective, CenterAlignDirective, ParallaxDirective, IndexSetterDirective],
  imports: [
    CommonModule
  ],
  exports: [HeadersComponent,ProgressBarComponent,UnderscoreDirective,SectionLayoutDirective,CenterAlignDirective,ParallaxDirective,IndexSetterDirective]
})
export class CoreModule {


}
