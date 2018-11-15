import { Component, OnInit } from '@angular/core';
import { Customer } from './customer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  // customers:Customer[]=[
  //   new Customer("farhad", "Hossain", "crocus drive", "Toronto", "1234", "active"),
  //   new Customer("Raiyan", "Hossain", "golwin drive", "Scarborough", "3455", "not active"),
  //   new Customer("Igor", "Mori", "york drive", "Toronto", "1234", "active"),
  //   new Customer("yash", "thanki", "Etibicoke drive", "Toronto", "1234", "not active")
  // ];

  constructor(private router:Router) { }

  ngOnInit() {
  }
  navigateVids()
  {
this.router.navigate(['/videolist']);
  }
}
