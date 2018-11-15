import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  username="farhad";
  password="1234";

  showMsg=false;

  constructor(private cookieservice:CookieService, private router:Router) { }

  ngOnInit() {
  }

  loginValidate(form:NgForm)
  {
    if(this.username!=form.value.username || this.password!=form.value.password)
    {
      this.showMsg=true;
    }
    else{
      this.showMsg=false;
      this.cookieservice.set("login", "Administrator");
      this.router.navigate(['/videolist']);
      window.location.reload();
      
    }


  }

}
