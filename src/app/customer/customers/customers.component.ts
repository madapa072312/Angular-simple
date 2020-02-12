import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/common/Customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers:Customer[] = [];
  searchText:string="";
  mode:string='card';
  
  mainCustomers:Customer[] = [];

  constructor() { }

  removeCustomer(id:number){
    this.customers=this.mainCustomers=this.mainCustomers.filter(c=>c.id!==id);
  }

  filterCustomers(){
    this.customers=this.mainCustomers.filter(c => {
      return (c.firstName.toUpperCase().indexOf(this.searchText.toUpperCase()) >= 0) ||
              (c.lastName.toUpperCase().indexOf(this.searchText.toUpperCase()) >= 0)
    });
  }

  ngOnInit(): void {
   this.mainCustomers= this.customers=[
      {
        "id": 1,
        "firstName": "Rachel",
        "lastName": "Green ",
        "gender": "female",
        "address": "Singapore"
      },
      {
        "id": 2,
        "firstName": "Chandler",
        "lastName": "Song",
        "gender": "male",
        "address": "Bugis"
      },
      {
        "id": 4,
        "firstName": "Monica",
        "lastName": "Gellers",
        "gender": "female",
        "address": "Victoria Street"
      },
      {
        "id": 5,
        "firstName": "Ross",
        "lastName": "Geller",
        "gender": "male",
        "address": "M G Road"
      },
      {
        "id": 6,
        "firstName": "Phoebe",
        "lastName": "Buffay",
        "gender": "female",
        "address": "Df"
      }
    ]
  }

}
