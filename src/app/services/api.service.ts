import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Promotion } from '../models/promotion';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  basePath = 'http://127.0.0.1:8000/api/promotions';

  constructor(private http: HttpClient) { }


  getItem(id): Observable<Promotion> {
    return this.http
      .get(this.basePath + '/' + id)
      .pipe(
        map((data: any) =>
          data.map((item: any) =>
            new Promotion(item.id, item.title, item.address, item.price, item.latitude, item.longitude)
          )
        )
      );
  }

  getList(): Observable<Promotion> {
    return this.http
      .get(this.basePath)
      .pipe(
        map((data: any) =>
          data.data.map((item: any) =>
            new Promotion(item.id, item.title, item.address, item.price, item.latitude, item.longitude)
          )
        )
      );
  }

}
