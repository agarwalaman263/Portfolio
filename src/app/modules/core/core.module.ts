import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './components/headers/headers.component';
import { UnderscoreDirective } from './directives/underscore.directive';
import { CenterAlignDirective } from './directives/center-align.directive';
import { ComingSsonPageComponent } from './components/coming-sson-page/coming-sson-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg';
@NgModule({
  declarations: [
    NavbarComponent,
    HeadersComponent,
    UnderscoreDirective,
    CenterAlignDirective,
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
    UnderscoreDirective,
    CenterAlignDirective]
})
export class CoreModule { }
