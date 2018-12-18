import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

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
import { SalesGraphComponent } from './financial/components/sales-graph/sales-graph.component';
import { CumulativeSalesComponent } from './sales/components/cumulative-sales/cumulative-sales.component';
import { AcountsPayableComponent } from './procurement/components/acounts-payable/acounts-payable.component';
import { TopSuppliersComponent } from './procurement/components/top-suppliers/top-suppliers.component';
import { TopProductsComponent } from './inventory/components/top-products/top-products.component';
import { ProfitMarginComponent } from './sales/components/profit-margin/profit-margin.component';
import { AccountsReceivableComponent } from './financial/components/accounts-receivable/accounts-receivable.component';
import { ProductDataComponent } from './product/components/product-data/product-data.component';
import { UnitInStockComponent } from './product/components/unit-in-stock/unit-in-stock.component';
import { FiscalYearService } from './shared/resolvers/fiscal-year.service';
import { UnitsSoldComponent } from './product/components/units-sold/units-sold.component'
import { EbitComponent } from './financial/components/ebit/ebit.component';
import { EbitdaComponent } from './financial/components/ebitda/ebitda.component';
import { SalesPerCountryGraphComponent } from './sales/components/sales-per-country-graph/sales-per-country-graph.component';
import { PriceVariationGraphComponent } from './product/components/price-variation-graph/price-variation-graph.component';
import { ProductValuesComponent } from './product/components/product-values/product-values.component';
import { PurchasesGraphComponent } from './procurement/components/purchases-graph/purchases-graph.component';
import { MerchandiseDelayComponent } from './inventory/components/merchandise-delay/merchandise-delay.component';
import { TopClientsComponent } from './sales/components/top-clients/top-clients.component';
import { BalanceSheetComponent } from './financial/components/balance-sheet/balance-sheet.component';
import { AssetsInStockComponent } from './inventory/components/assets-in-stock/assets-in-stock.component';
import { ClientInfoComponent } from './client/components/client-info/client-info.component';
import { SupplierComponent } from './supplier/pages/supplier/supplier.component';

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
    SalesGraphComponent,
    KpiLineChartComponent,
    KpiBarChartComponent,
    KpiPieChartComponent,
    KpiValueComponent,
    CumulativeSalesComponent,
    AcountsPayableComponent,
    TopSuppliersComponent,
    TopProductsComponent,
    ProfitMarginComponent,
    AccountsReceivableComponent,
    ProductDataComponent,
    UnitInStockComponent,
    UnitsSoldComponent,
    EbitComponent,
    EbitdaComponent,
    SalesPerCountryGraphComponent,
    PriceVariationGraphComponent,
    ProductValuesComponent,
    PurchasesGraphComponent,
    MerchandiseDelayComponent,
    TopClientsComponent,
    AssetsInStockComponent,
    ClientInfoComponent,
    BalanceSheetComponent,
    SupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    FiscalYearService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
