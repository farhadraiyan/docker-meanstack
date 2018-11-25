import { Component, OnInit } from '@angular/core';
import { VideolistServiceService } from '../../../videolist-service.service';
import { Videos } from '../videos.model';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-reserve-video',
  templateUrl: './reserve-video.component.html',
  styleUrls: ['./reserve-video.component.css']
})
export class ReserveVideoComponent implements OnInit {
  videos: Videos[];
  fileName = "default.png";//to avoid error initialize defalut value
  imgpath = "../../../../assets/";
  videotobeReserved:Videos={title:"",runtime:"",genre:"",rating:"",director:"",status:"",imgPath:""};//assigning this default object to avoid error in life cyle hook
  indexparm = this.route.snapshot.params['index'];
  constructor(private route: ActivatedRoute, private http: HttpClient, private videoservice: VideolistServiceService) {

   }

  ngOnInit() {
    this.videoservice.getVideolist()
    .subscribe((vids) => {
      this.videos = vids;
    for(let i=0;i<this.videos.length;i++)
      {
        if(this.indexparm==i)
        {
          this.videotobeReserved=this.videos[i];
          this.fileName=this.videotobeReserved.imgPath;
          console.log(this.fileName)
        }
      }
      
    })  

  }

  reserveVideos(id) {

    this.videoservice.reserveVideo(id)
    .subscribe();

  }

}
