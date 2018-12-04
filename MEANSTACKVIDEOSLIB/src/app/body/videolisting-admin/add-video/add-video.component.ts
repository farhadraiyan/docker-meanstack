import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VideolistServiceService } from '../../../Services/videolist-service.service';
import { NgForm } from '@angular/forms';
import { Videos } from '../../videolisting-users/videos.model';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CategoryandratingService } from 'src/app/Services/categoryandrating.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {
  selctedFile: File = null;

  videos: Videos[]=[];
  defImgUrl: string = "../../../../assets/default.png";//this default image url
  fileName = "default.png";
  starsRating:String[];
  category:String[];
  emptyField=false;
  constructor(private category_rating_serv:CategoryandratingService, private cookieservice:CookieService, private router:Router, private http: HttpClient, private videoservice: VideolistServiceService) { }

  ngOnInit() {
    this.category_rating_serv.category.subscribe((cat_ratings)=>{
      this.category=cat_ratings[0];
      this.starsRating=cat_ratings[1];
    })

        //checking user login status if not logged in redirect
        if (this.cookieservice.get("login") == "") {
          this.router.navigate(['']);
        }


  }
  onFileSelect(event) {
    this.selctedFile = <File>event.target.files[0];
    this.fileName = this.selctedFile.name;//assign filename on user selct
  }
  addvideo(form: NgForm, gen, star, stat) {


    const newVideo={
      title:form.value.title,
      runtime: form.value.runtime,
      genre: gen.value, 
      rating:star.value,
      director: form.value.director, 
      status:stat.value,
      imgPath:this.fileName
    }
    if(newVideo.title=="" || newVideo.director=="" || newVideo.genre=="" || newVideo.rating== "" || newVideo.status == "" )
    {
      this.emptyField=true;

    }
    else{
      this.videoservice.addVideo(newVideo)
      .subscribe(vids=>{
        this.videos.push(vids)
        this.router.navigate(['/videolist']);
      })
      
      

    }




  }


}
