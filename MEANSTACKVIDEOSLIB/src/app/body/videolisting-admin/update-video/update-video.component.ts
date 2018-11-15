import { Component, OnInit, ViewChild } from '@angular/core';
import {Videos} from '../../videolisting-users/videos.model';
import { VideolistServiceService } from '../../../videolist-service.service';
import { NgForm } from '@angular/forms';
import { Router, Params, ActivatedRoute} from '@angular/router';
import { generate } from 'rxjs';
@Component({
  selector: 'app-update-video',
  templateUrl: './update-video.component.html',
  styleUrls: ['./update-video.component.css']
})
export class UpdateVideoComponent implements OnInit {
  selctedFile: File = null;
  indexparm=this.route.snapshot.params['index'];
  videos: Videos[];
  componUrl="../../../../assets/";
  fileName = "default.png";
  defImgPath="";

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {


    
  }
  // updateVideo(form:NgForm,gen,star,stat)
  // {
  //   this.defImgPath=this.fileName;
  //   let updatedVid=new Videos(form.value.title, form.value.runtime,
  //     gen.value,
  //     star.value,
  //     form.value.director,
  //     stat.value,
  //     this.defImgPath);
  //   this.videos[this.indexparm]=updatedVid;
  //     //finally update the videos throuh obs


  // }



}
