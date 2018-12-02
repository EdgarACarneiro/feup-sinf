import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

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
import { DashboardComponent } from './shared/pages/dashboard/dashboard.component';
import { WebApiRequesterComponent } from './shared/components/web-api-requester/web-api-requester.component';
import { KpiLineChartComponent } from './shared/components/kpi-line-chart/kpi-line-chart.component';
import { KpiBarChartComponent } from './shared/components/kpi-bar-chart/kpi-bar-chart.component';
import { KpiPieChartComponent } from './shared/components/kpi-pie-chart/kpi-pie-chart.component';
import { KpiValueComponent } from './shared/components/kpi-value/kpi-value.component';
import { GrossNetSalesComponent } from './financial/components/gross-net-sales/gross-net-sales.component';
import { CumulativeSalesComponent } from './sales/components/cumulative-sales/cumulative-sales.component';
import { AcountsPayableComponent } from './procurement/components/acounts-payable/acounts-payable.component';
import { TopSuppliersComponent } from './procurement/components/top-suppliers/top-suppliers.component';
import { TopProductsComponent } from './inventory/components/top-products/top-products.component';
import { NetSalesComponent } from './sales/components/net-sales/net-sales.component';
import { ProfitMarginComponent } from './sales/components/profit-margin/profit-margin.component';
import { CashFlowComponent } from './financial/components/cash-flow/cash-flow.component';
import { AccountsReceivableComponent } from './financial/components/accounts-receivable/accounts-receivable.component';
import { ProductDataComponent } from './product/components/product-data/product-data.component';
import { UnitInStockComponent } from './product/components/unit-in-stock/unit-in-stock.component';

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
    LoginComponent,
    DashboardComponent,
    WebApiRequesterComponent,
    GrossNetSalesComponent,
    KpiLineChartComponent,
    KpiBarChartComponent,
    KpiPieChartComponent,
    KpiValueComponent,
    CumulativeSalesComponent,
    AcountsPayableComponent,
    TopSuppliersComponent,
    TopProductsComponent,
    NetSalesComponent,
    ProfitMarginComponent,
    CashFlowComponent,
    AccountsReceivableComponent,
    ProductDataComponent,
    UnitInStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
