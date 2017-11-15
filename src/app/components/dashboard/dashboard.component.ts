import { IOrder } from './../../dataModel';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  orderArr:any;
  constructor(private _http:HttpClient) { }

  ngOnInit() {
    this._http.get("http://localhost:3000/api/orders").subscribe(data=>{
      console.log(data);
      this.orderArr=data;
      console.log(this.orderArr);
    });


    // var urlToChangeStream = '/api/MyModels/change-stream?_format=event-stream';
    // var src = new EventSource(urlToChangeStream);
    // src.addEventListener('data', function(msg) {
    //   var data = JSON.parse(msg.data);
    //   console.log(data); // the change object
    // });

  }
  onServe(id:number){
    this._http.delete("http://localhost:3000/api/orders/"+id).subscribe(
      data=>{
        this._http.get("http://localhost:3000/api/orders").subscribe(data=>{
          this.orderArr=data;
        })
      }
    );
  }
}