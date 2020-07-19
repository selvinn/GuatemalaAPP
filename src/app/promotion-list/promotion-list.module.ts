import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromotionListPageRoutingModule } from './promotion-list-routing.module';

import { PromotionListPage } from './promotion-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromotionListPageRoutingModule
  ],
  declarations: [PromotionListPage]
})
export class PromotionListPageModule {}
