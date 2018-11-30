import { Component, OnInit, ViewChild } from '@angular/core';
import { Videos } from '../../videolisting-users/videos.model';
import { VideolistServiceService } from '../../../Services/videolist-service.service';
import { NgForm } from '@angular/forms';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { generate } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-update-video',
  templateUrl: './update-video.component.html',
  styleUrls: ['./update-video.component.css']
})
export class UpdateVideoComponent implements OnInit {
  starsRating = ["1 star", "2 star", "3 star", "4 star", "5 star"]
  category = ["Action", "Thriller", "Comedy", "Romantic", "Crime Triller", "Animation"]
  selctedFile: File = null;
  indexparm = this.route.snapshot.params['index'];
  videos: Videos[];
  fileName: String;//to avoid error initialize defalut value
  imgpath = "../../../../assets/";
  defImgPath: String;
  videotobeEdited: Videos = { title: "", runtime: "", genre: "", rating: "", director: "", status: "", imgPath: "" };//assigning this default object to avoid error in life cyle hook


  constructor(private cookieservice: CookieService, private router: Router, private route: ActivatedRoute, private http: HttpClient, private videoservice: VideolistServiceService) { }

  ngOnInit() {

    //checking user login status if not logged in redirect
    if (this.cookieservice.get("login") == "") {
      this.router.navigate(['']);
    }

    this.videoservice.getVideolist()
      .subscribe((vids) => {
        this.videos = vids;
        for (let i = 0; i < this.videos.length; i++) {
          if (this.indexparm == i) {
            this.videotobeEdited = this.videos[i];
            this.fileName = this.videotobeEdited.imgPath;
            console.log(this.videotobeEdited.imgPath);
          }
        }

      })
    //assigning image path
    if (this.videotobeEdited.imgPath == "") {
      this.fileName = "default.png";
    }
    else {
      this.fileName = this.videotobeEdited.imgPath;
    }
    this.defImgPath = this.imgpath + this.fileName;

  }
  onFileSelect(event) {
    this.selctedFile = <File>event.target.files[0];
    this.fileName = this.selctedFile.name;//assign filename on user selct
  }
  updateVideo(form: NgForm, gen, star, stat, id) {
    let updatedVid = {
      _id: id, title: form.value.title, runtime: form.value.runtime, genre: gen.value,
      rating: star.value, director: form.value.director, status: stat.value, imgPath: this.fileName
    };
    this.videoservice.updateVideo(updatedVid)
      .subscribe(data => {
        console.log(data);
        this.videos[this.indexparm] = data
        this.router.navigate(['/videolist']);
      });

    // this.videoservice.getVideolist()
    // .subscribe(vids=>this.videos = vids)


  }

}
