import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from 'src/app/Services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {


  emptyField=false;

  constructor(private custService:CustomerService, private router:Router) { }

  ngOnInit() {
  }

  addCustomer(form:NgForm)
  {
    console.log(form.value.fn)
    if(form.value.fn==""||form.value.ln==""||form.value.addr==""||form.value.city==""||form.value.phone==""||form.value.stat=="")
    {
this.emptyField=true;
console.log(form.value.fn)
    }
    else{
      const newcustomer={
        firstName: form.value.fn,
        lastName: form.value.ln,
        address: form.value.addr,
        city: form.value.city,
        phone: form.value.phone,
        status: form.value.stat
      }
      this.emptyField=false;
      this.custService.addCustomers(newcustomer)
      .subscribe((res)=>{
        console.log(res);
        this.router.navigate(["/customers"])
      })

    }


  }

}
