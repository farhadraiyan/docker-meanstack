import { Injectable } from '@angular/core';
import { Admin } from './body/adminlogin/admin.model';
import 'rxjs/add/operator/map';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: Http) { }

  getAdmins() {
    //inorder to get the latest version of 'npm i rxjs-compat' otherwise map give error
    return this.http.get("http://localhost:3000/login")
      .map(res => res.json());

  }
}
