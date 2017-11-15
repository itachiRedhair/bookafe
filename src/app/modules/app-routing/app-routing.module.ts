import { DashboardComponent } from './../../components/dashboard/dashboard.component';
import { PlaceOrderComponent } from './../../components/place-order/place-order.component';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

const appRoutes:Routes=[
  {path:'place',component:PlaceOrderComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"",redirectTo:"place",pathMatch:"full"},
  {path:"**",redirectTo:"place",pathMatch:"full"}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
