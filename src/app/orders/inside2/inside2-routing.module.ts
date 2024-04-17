import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Inside2Component } from './inside2.component';

const routes: Routes = [{ path: '', component: Inside2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Inside2RoutingModule { }
