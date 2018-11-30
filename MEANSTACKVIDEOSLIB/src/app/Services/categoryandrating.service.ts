import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryandratingService {
  //when try to pass multiple values
  private categorysrc=new BehaviorSubject<String[][]>([["Drama","Action","Thriller","Comedy","Romantic","Crime Triller", "Animation"],
  ["1 star","2 star","3 star","4 star","5 star"]]);
  category=this.categorysrc.asObservable();
  // private starsRatingsrc=new BehaviorSubject<String[]>(["1 star","2 star","3 star","4 star","5 star"]);
  // starsRating=this.starsRatingsrc.asObservable();
  constructor() { }
}
