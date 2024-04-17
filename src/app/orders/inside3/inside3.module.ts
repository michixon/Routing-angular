import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Inside3RoutingModule } from './inside3-routing.module';
import { Inside3Component } from './inside3.component';


@NgModule({
  declarations: [
    Inside3Component
  ],
  imports: [
    CommonModule,
    Inside3RoutingModule
  ]
})
export class Inside3Module { }
