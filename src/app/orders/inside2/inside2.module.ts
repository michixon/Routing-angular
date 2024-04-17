import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Inside2RoutingModule } from './inside2-routing.module';
import { Inside2Component } from './inside2.component';


@NgModule({
  declarations: [
    Inside2Component
  ],
  imports: [
    CommonModule,
    Inside2RoutingModule
  ]
})
export class Inside2Module { }
