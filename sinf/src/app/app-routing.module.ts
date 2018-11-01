import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinancialComponent } from './financial/pages/financial/financial.component';
import { SalesComponent } from './sales/pages/sales/sales.component';
import { ProcurementComponent } from './procurement/pages/procurement/procurement.component';
import { OverviewComponent } from './overview/pages/overview/overview.component';
import { InventoryComponent } from './inventory/pages/inventory/inventory.component';
import { ProductComponent } from './product/pages/product/product.component';
import { ClientComponent } from './client/pages/client/client.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent
  },
  {
    path: 'financial',
    component: FinancialComponent
  },
  {
    path: 'sales',
    component: SalesComponent
  },
  {
    path: 'procurement',
    component: ProcurementComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: 'client/:id',
    component: ClientComponent
  },
  { // Ver aqui depois se fica assim ou se temos uma 404 page
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
