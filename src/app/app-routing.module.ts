import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComingSsonPageComponent } from './modules/core/components/coming-sson-page/coming-sson-page.component';

const routes: Routes = [{
  path: 'blog',
  component: ComingSsonPageComponent
},{
  path: '',
  loadChildren: () => import('./modules/portfolio/portfolio.module').then(m => m.PortfolioModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
