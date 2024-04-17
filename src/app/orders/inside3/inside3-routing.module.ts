import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Inside3Component } from './inside3.component';

const routes: Routes = [{ path: '', component: Inside3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Inside3RoutingModule { }
