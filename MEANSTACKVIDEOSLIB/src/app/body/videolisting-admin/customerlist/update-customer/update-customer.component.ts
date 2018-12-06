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

  updateCustomer(form:NgForm,id)
  {
    console.log("f"+form.value.fn)
    if(form.value.fn==""||form.value.ln==""||form.value.addr==""||form.value.city==""||form.value.phone==""||form.value.stat=="")
    {
this.emptyField=true;
    }
    else{
      const newcustomer={
        _id:id,
        firstName: form.value.fn,
        lastName: form.value.ln,
        address: form.value.addr,
        city: form.value.city,
        phone: form.value.phone,
        status: form.value.stat
      }

      this.custserv.updateCustomer(newcustomer)
      .subscribe((res)=>{
      })

      this.emptyField=false;


    }

  }

}
