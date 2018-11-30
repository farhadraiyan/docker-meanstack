import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:Http) { }

  getCustomers()
  {
    return this.http.get("http://localhost:3000/customers")
    .map(res=>res.json())
  }
}


// getAdmins() {
//   //inorder to get the latest version of 'npm i rxjs-compat' otherwise map give error
//   return this.http.get("http://localhost:3000/login")
//     .map(res => res.json());

// }