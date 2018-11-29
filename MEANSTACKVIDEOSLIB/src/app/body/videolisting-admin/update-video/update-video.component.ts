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

  fileName = "default.png";//to avoid error initialize defalut value
  imgpath = "../../../../assets/";
  defImgPath = this.imgpath + this.fileName;
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

  }
  onFileSelect(event) {
    this.selctedFile = <File>event.target.files[0];
    this.fileName = this.selctedFile.name;//assign filename on user selct
  }
  updateVideo(form: NgForm, gen, star, stat, id) {
    this.defImgPath = this.fileName;
    let updatedVid = {
      _id: id, title: form.value.title, runtime: form.value.runtime, genre: gen.value,
      rating: star.value, director: form.value.director, status: stat.value, imgPath: this.defImgPath
    };
    this.videoservice.updateVideo(updatedVid)
      .subscribe(data => this.videos[this.indexparm] = data);

    // this.videoservice.getVideolist()
    // .subscribe(vids=>this.videos = vids)
    this.router.navigate(['/videolist']);

  }

}
