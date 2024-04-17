import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';


const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'orders',
    children: [
      { path: '', component: OrdersComponent }, // Default route for /orders displays OrdersComponent
      { path: 'inside2', loadChildren: () => import('./orders/inside2/inside2.module').then(m => m.Inside2Module) },
      { path: 'inside3', loadChildren: () => import('./orders/inside3/inside3.module').then(m => m.Inside3Module) }
    ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }

