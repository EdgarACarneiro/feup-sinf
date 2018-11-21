import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinancialComponent } from './financial/pages/financial/financial.component';
import { ClientComponent } from './client/pages/client/client.component';
import { OverviewComponent } from './overview/pages/overview/overview.component';
import { InventoryComponent } from './inventory/pages/inventory/inventory.component';
import { SalesComponent } from './sales/pages/sales/sales.component';
import { ProcurementComponent } from './procurement/pages/procurement/procurement.component';
import { ProductComponent } from './product/pages/product/product.component';
import { LoginComponent } from './user/pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FinancialComponent,
    ClientComponent,
    OverviewComponent,
    InventoryComponent,
    SalesComponent,
    ProcurementComponent,
    ProductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
