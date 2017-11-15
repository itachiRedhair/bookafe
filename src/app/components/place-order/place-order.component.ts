import { IOrder } from './../../dataModel';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  order:IOrder={
    customer_name:"",
    book_name:"",
    cofee_name:""  
  };
  isPlaced:boolean=false;
  constructor(private _http:HttpClient) { }

  ngOnInit() {
  }
  onPlace(temp){
    console.log(this.order);
    this._http.post('http://localhost:3000/api/orders',this.order).subscribe(data=>{
      console.log(data);
    });
    this.isPlaced=true;
    console.log(temp);
  }
}
