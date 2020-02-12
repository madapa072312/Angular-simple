import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { ReportComponent } from './report/report.component';
import {ChartModule} from 'primeng/chart';


const routes: Routes = [
    {
      path: '',
      component: OrderComponent,
      children:[
        {
          path : 'report',
          component:ReportComponent
        }
      ]
    }
  ];
  
@NgModule({
    imports: [RouterModule.forChild(routes),ChartModule],
    exports: [RouterModule],
    declarations: [OrderComponent,ReportComponent]
})
export class OrdersModule{}