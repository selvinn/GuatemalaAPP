import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'promotion-list',
    pathMatch: 'full'
  },
  {
    path: 'promotion-list',
    loadChildren: () => import('./promotion-list/promotion-list.module').then( m => m.PromotionListPageModule)
  },
  {
    path: 'promotion-detail/:id',
    loadChildren: () => import('./promotion-detail/promotion-detail.module').then( m => m.PromotionDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
