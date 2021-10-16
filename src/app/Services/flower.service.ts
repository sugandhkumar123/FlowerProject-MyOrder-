import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrderDetails } from '../Models/IOrderDetails';

@Injectable({
  providedIn: 'root'
})
export class FlowerService {

  // orderdetails:OrderDetails[]=[
  //   {
  //     orderId:1,
  //     flowerId:11,
  //     totalprice:1000,
  //     remark:"Birthday",
  //     paymentStatus:"pending"
  //   },
  //   {orderId:2,
  //     flowerId:12,
  //     totalprice:500,
  //     remark:"Anniversary",
  //     paymentStatus:"Done"
  //   }
  // ];

  public _url : string= "https://localhost:44343/api/Order/OrderdetailsbyCustomerId?id=101";

  constructor( private http:HttpClient) { }
  getOrderDetails():Observable<IOrderDetails[]>{
    return this.http.get<IOrderDetails[]>(this._url);
  }

  // getOrderDetails(){
  //   return this.orderdetails;
  // }
}
