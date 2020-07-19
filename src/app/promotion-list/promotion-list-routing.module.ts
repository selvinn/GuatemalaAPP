import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromotionListPage } from './promotion-list.page';

const routes: Routes = [
  {
    path: '',
    component: PromotionListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromotionListPageRoutingModule {}
