import { Injectable } from '@angular/core';
import { Videos } from './body/videolisting-users/videos.model';
import 'rxjs/add/operator/map';
import {Http, Headers} from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class VideolistServiceService {

  constructor(private http:Http) { }

  getVideolist()
  {
    //inorder to get the latest version of 'npm i rxjs-compat' otherwise map give error
    return this.http.get("http://localhost:3000/videolist")
    .map(res=>res.json());
    
  }
  addVideo(newvideo)
  {
    var headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post("http://localhost:3000/addvideo", newvideo,{headers:headers})
    .map(res=>res.json());
  }

}

