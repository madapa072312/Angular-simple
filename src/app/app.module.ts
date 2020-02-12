import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import {FormsModule} from '@angular/forms'
import {Route, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { CustomersComponent } from './customer/customers/customers.component';
import { CustomersCardComponent } from './customer/customers-card/customers-card.component';
import { CustomersListComponent } from './customer/customers-list/customers-list.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './orders/order/order.component';

const routes:Route[] = [
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'customers',
    component : CustomersComponent
  },
  {
    path : 'orders',
    component : OrderComponent
  },
  {
    path : '**',
    component : HomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomersCardComponent,
    CustomersListComponent,
    HomeComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
