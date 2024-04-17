import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { Inside2Module } from './inside2/inside2.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    Inside2Module,RouterModule
  ]
})
export class OrdersModule { }
