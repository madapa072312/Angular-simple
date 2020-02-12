import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/common/shared.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  information:any[];
  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    this.sharedService.getSubject().subscribe(data=>{
      this.information=data;
    });
  }



}
