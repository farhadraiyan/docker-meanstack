import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Admin } from './admin.model';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css'],
  providers: [AdminService]
})
export class AdminloginComponent implements OnInit {

  // username="farhad";
  // password="1234";
  admins:Admin[];

  showMsg=false;

  constructor(private cookieservice:CookieService, private router:Router, private adminservice:AdminService) { }

  ngOnInit() {
    
    this.adminservice.getAdmins()
    .subscribe((admins)=>{
      this.admins=admins

    })
    
  }

  loginValidate(form:NgForm)
  {
    for(let i=0;i<this.admins.length;i++)
    {
      if(this.admins[i].userName==form.value.username && this.admins[i].password==form.value.password)
      {
        this.showMsg=false;
        this.cookieservice.set("login", "Administrator");
        this.router.navigate(['/videolist']);
        window.location.reload();

      }
      else{

        this.showMsg=true;
      }
    }



  }

}
