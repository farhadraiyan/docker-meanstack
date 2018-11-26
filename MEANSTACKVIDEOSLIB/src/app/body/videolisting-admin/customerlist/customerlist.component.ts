import { Component, OnInit } from '@angular/core';
import { Customer } from './customer.model';
import { Router } from '@angular/router';
import { CustomerServiceService } from './customer-service.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  customers:Customer[];

  constructor(private router:Router, private customerService:CustomerServiceService) { }

  ngOnInit() {
    this.customerService.currentcustomers.subscribe((custs)=>{
      this.customers=custs
      console.log(custs)
    })
  }
  navigateVids()
  {
this.router.navigate(['/videolist']);
  }
}
