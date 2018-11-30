import { Component, OnInit } from '@angular/core';
import { Customer } from './customer.model';
import { Router } from '@angular/router';
import {SearchService } from '../../../Services/search.service';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css'],
  providers: [CustomerService]
})
export class CustomerlistComponent implements OnInit {
  customers:Customer[];
  customers2:Customer[];

  constructor(private search:SearchService,private router:Router, private customerService:CustomerService) { }

  ngOnInit() {

    this.customerService.getCustomers()
    .subscribe(custs=>{
      this.customers=custs;
      this.customers2=custs;
    })

    // this.customerService.currentcustomers.subscribe((custs)=>{
    //   this.customers=custs
    //   this.customers2=this.customers;
    //   console.log(custs)
    // })
  }
  navigateVids()
  {
this.router.navigate(['/videolist']);
  }

  navigateCusts()
  {
    this.router.navigate(['/customers']);
  }

  filteredVideos(event:any)
  {
    // this.customers2=[];
      this.customers2=this.search.filterCustomers(event,this.customers);
  }

}
