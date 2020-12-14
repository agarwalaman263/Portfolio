import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioModule } from './modules/portfolio/portfolio.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }).withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CoreModule,
    PortfolioModule,
    HttpClientModule,
    RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
