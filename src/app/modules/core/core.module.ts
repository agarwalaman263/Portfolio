import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './components/headers/headers.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { UnderscoreDirective } from './directives/underscore.directive';
import { SectionLayoutDirective } from './directives/section-layout.directive';
import { CenterAlignDirective } from './directives/center-align.directive';
import { ParallaxDirective } from './directives/parallax.directive';
import { IndexSetterDirective } from './directives/index-setter.directive';
import { ComingSsonPageComponent } from './components/coming-sson-page/coming-sson-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg';
@NgModule({
  declarations: [
    NavbarComponent,
    HeadersComponent,
    ProgressBarComponent,
    UnderscoreDirective,
    SectionLayoutDirective,
    CenterAlignDirective,
    ParallaxDirective,
    IndexSetterDirective,
    ComingSsonPageComponent,
    NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    InlineSVGModule
  ],
  exports: [
    NavbarComponent,
    ComingSsonPageComponent,
    HeadersComponent, 
    ProgressBarComponent, 
    UnderscoreDirective, 
    SectionLayoutDirective, 
    CenterAlignDirective, 
    ParallaxDirective, 
    IndexSetterDirective]
})
export class CoreModule { }
