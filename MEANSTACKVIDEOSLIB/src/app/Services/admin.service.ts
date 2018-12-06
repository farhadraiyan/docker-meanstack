import { Injectable } from '@angular/core';
import { Admin } from '../body/adminlogin/admin.model';
import 'rxjs/add/operator/map';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: Http, private router:Router) { }

  getAdmins() {
    //inorder to get the latest version of 'npm i rxjs-compat' otherwise map give error
    return this.http.get("http://localhost:3000/login")
      .map(res => res.json());

  }
  addAdmin(admin) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post("http://localhost:3000/register", admin, { headers: headers })
      .map(res => res.json());
      
  }
  
}
