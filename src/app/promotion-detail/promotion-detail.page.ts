import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Promotion } from '../models/promotion';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-promotion-detail',
  templateUrl: './promotion-detail.page.html',
  styleUrls: ['./promotion-detail.page.scss'],
})
export class PromotionDetailPage implements OnInit {

  id: number;
  promotion: Promotion;

  constructor(
    public activatedRoute: ActivatedRoute,
    public apiService: ApiService
    ) { 
      this.promotion = new Promotion();
    }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.apiService.getItem(this.id).subscribe(response => {
      console.log(response[0]);
      this.promotion = response[0];
    })
  }

}
