import { Component, OnInit, OnChanges } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

  constructor(private cookieservice:CookieService, private router:Router) { 

  }
  logVal=true;
  logoutVal=false;
  cookieVal=this.cookieservice.get("login");
  ngOnInit() {

    if(this.cookieVal=="")
    {
      this.logVal=true;
      this.logoutVal=false;
    }else{
      this.logVal=false;
      this.logoutVal=true;
    }
  }
  ngOnChanges()
  {

  }
  logOut()
  {
    this.cookieservice.delete("login");
    this.router.navigate(['']);
    window.location.reload();//this is a way to reload but not a angular way to do
  }


}
