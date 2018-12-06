import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  emptyField=false;
  indexparm = this.route.snapshot.params['index'];
  customerToBeEdited={firstName:"",lastName:"", address:"", city:"", phone:"", status:""}

  constructor(private custserv:CustomerService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {

this.custserv.getCustomers()
.subscribe((custs)=>{
  this.customerToBeEdited=custs[this.indexparm]
})

  }

  updateCustomer(fn,ln,addr,city,phone,stat,id)
  {
    if(fn.value==""||ln.value==""||addr.value==""||city.value==""||phone.value==""||stat.value=="")
    {
this.emptyField=true;
    }
    else{
      const newcustomer={
        _id:id,
        firstName: fn.value,
        lastName: ln.value,
        address: addr.value,
        city: city.value,
        phone: phone.value,
        status: stat.value
      }

      this.custserv.updateCustomer(newcustomer)
      .subscribe((res)=>{
        this.emptyField=false;
        this.router.navigate(["/customers"])
      })



    }

  }

}
