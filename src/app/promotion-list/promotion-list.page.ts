import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.page.html',
  styleUrls: ['./promotion-list.page.scss'],
})
export class PromotionListPage implements OnInit {

  promotionsData: any;

  constructor(
    public apiService: ApiService,
    private router: Router
  ) {
    this.promotionsData = [];
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getAllPromotions();
  }

  getAllPromotions() {
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.promotionsData = response;
    })
  }

  openPromotion(item){
    this.router.navigateByUrl('/promotion-detail/' + item.id);
  }

}
