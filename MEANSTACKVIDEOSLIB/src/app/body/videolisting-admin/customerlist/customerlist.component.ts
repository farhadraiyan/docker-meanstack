import { Component, OnInit } from '@angular/core';
import { Customer } from './customer.model';
import { Router } from '@angular/router';
import { CustomerServiceService } from './customer-service.service';
import {SearchService } from '../../../search.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  customers:Customer[];
  customers2:Customer[];

  constructor(private search:SearchService,private router:Router, private customerService:CustomerServiceService) { }

  ngOnInit() {
    this.customerService.currentcustomers.subscribe((custs)=>{
      this.customers=custs
      this.customers2=this.customers;
      console.log(custs)
    })
  }
  navigateVids()
  {
this.router.navigate(['/videolist']);
  }

  filteredVideos(event:any)
  {
    // this.customers2=[];
      this.customers2=this.search.filterCustomers(event,this.customers);
  }

}
