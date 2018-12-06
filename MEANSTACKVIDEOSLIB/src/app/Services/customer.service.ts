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
  addCustomers(customer)
  {
    const headers=new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post("http://localhost:3000/addcustomers", customer,{headers:headers})
    .map(res=>res.json())
  }

  updateCustomer(customr) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put("http://localhost:3000/updatecustomer/" + customr._id, customr,{ headers: headers })
      .map(res => res.json());
  }

  deleteCustomer(id)
  {
    return this.http.delete("http://localhost:3000/customer/"+id)
    .map(res=>res.json())
  }


}
