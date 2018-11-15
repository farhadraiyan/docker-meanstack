import { Component, OnInit } from '@angular/core';
import { VideolistServiceService } from 'src/app/videolist-service.service';
import {Videos} from '../videos.model';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-reserve-video',
  templateUrl: './reserve-video.component.html',
  styleUrls: ['./reserve-video.component.css']
})
export class ReserveVideoComponent implements OnInit {
  videos:Videos[];
  indexparm=this.route.snapshot.params['index'];
  imgpath='../../../../assets/';
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

  }

  reserveVideos(selctvalue)
  {  
    this.route.params
    .subscribe(
      (params:Params)=>
      {
        //params is holing the all parameters with key value pair
        this.videos[params['index']].status="unavailable";
          //finally update the array with new value
          this.videos[params['index']]=this.videos[params['index']];
          
      }
    )

  }

}
