import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { Customer } from './customer.model';
@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  private custSource=new BehaviorSubject<Customer[]>([
    new Customer("farhad", "Hossain", "crocus drive", "Toronto", "1234", "active"),
    new Customer("Raiyan", "Hossain", "golwin drive", "Scarborough", "3455", "not active"),
    new Customer("Soroar", "Hossain", "york drive", "Toronto", "1234", "active"),
    new Customer("albert", "Eineistein", "Munich", "Germany", "234234", "not active"),
    new Customer("Ferdausi", "Begum", "Dhaka", "Bangladesh", "234234", "active")
  ]);
   currentcustomers=this.custSource.asObservable();

  constructor() { }
}

