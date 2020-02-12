import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './Customer';

@Injectable()
export class DataService{
    customerUrl : string = 'http://localhost:3000/customers';
    orderUrl : string = 'http://localhost:3000/orders';
    constructor(private http:HttpClient){
    }

    getCustomers():Observable<Customer[]>{
        return this.http.get<Customer[]>(this.customerUrl);
    }

    getCustomer(id:number):Observable<Customer>{
        return this.http.get<Customer>(`${this.customerUrl}/${id}`);
    }

    addCustomer(customer:Customer):Observable<any>{
        return this.http.post(this.customerUrl, customer);
    }

    updateCustomer(customer:Customer):Observable<any>{
        return this.http.put(`${this.customerUrl}/${customer.id}`,customer);
    }

    deleteCustomer(id:number):Observable<any>{
        return this.http.delete(`${this.customerUrl}/${id}`);
    }

}