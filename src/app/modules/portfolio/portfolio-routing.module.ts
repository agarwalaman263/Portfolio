import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioHomeComponent } from './Components/portfolio-home/portfolio-home.component';

const usersRoutes: Routes = [{
    path: '',
    component: PortfolioHomeComponent
}];
@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: []
})

export class PortfolioRoutingModule { }