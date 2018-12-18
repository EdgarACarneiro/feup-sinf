import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinancialComponent } from './financial/pages/financial/financial.component';
import { SalesComponent } from './sales/pages/sales/sales.component';
import { ProcurementComponent } from './procurement/pages/procurement/procurement.component';
import { OverviewComponent } from './overview/pages/overview/overview.component';
import { InventoryComponent } from './inventory/pages/inventory/inventory.component';
import { ProductComponent } from './product/pages/product/product.component';
import { ClientComponent } from './client/pages/client/client.component';
import { LoginComponent } from './user/pages/login/login.component';
import { DashboardComponent } from './shared/pages/dashboard/dashboard.component';
import { AuthGuard } from './user/services/authGuard/auth.guard';
import { UnauthGuard } from './user/services/unauthGuard/unauth.guard';
import { FiscalYearService } from './shared/resolvers/fiscal-year.service';
import { SupplierComponent } from './supplier/pages/supplier/supplier.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: {
      fiscalYear: FiscalYearService
    },
    canActivate: [AuthGuard],
    children: [
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
        path: 'consumer/:id',
        component: ClientComponent
      },
      {
        path: 'supplier/:id',
        component: SupplierComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UnauthGuard],
  },
  { // Ver aqui depois se fica assim ou se temos uma 404 page
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
