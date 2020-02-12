import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from 'src/common/Customer';

@Component({
  selector: 'app-customers-card',
  templateUrl: './customers-card.component.html',
  styleUrls: ['./customers-card.component.css']
})
export class CustomersCardComponent implements OnInit {

  @Input()
  customers :Customer[];

  @Output()
  delEvent:EventEmitter<number>=new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  deleteCustomer(id:number){
    console.log("Card Component ",id);
    this.delEvent.next(id); //emmit the event
  }
}
