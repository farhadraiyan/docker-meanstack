import { Injectable } from '@angular/core';
import { Videos } from '../body/videolisting-users/videos.model';
import { Customer } from '../body/videolisting-admin/customerlist/customer.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  constructor() { }
  filteredVideos(event: any, videos: Videos[]) {

    let videos2: Videos[] = [];
    // this.videos=this.videos.splice(0,4)
    for (let i = 0; i < videos.length; i++) {
      if (videos[i].title.toLowerCase().startsWith(event.target.value.toLowerCase())) {
        videos2.push(videos[i]);
      }
    }
    return videos2;
    // console.log(this.videos2.length)

  }
  filterCustomers(event: any, customers: Customer[]) {
    let custs2: Customer[] = [];
    for (let i = 0; i < customers.length; i++) {
      if (customers[i].firstName.toLowerCase().startsWith(event.target.value.toLowerCase()) || customers[i].lastName.toLowerCase().startsWith(event.target.value.toLowerCase())) {
        custs2.push(customers[i]);
      }
    }
    return custs2;


  }
}
