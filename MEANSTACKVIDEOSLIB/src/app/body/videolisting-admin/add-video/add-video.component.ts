import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VideolistServiceService } from '../../../videolist-service.service';
import { NgForm } from '@angular/forms';
import { Videos } from '../../videolisting-users/videos.model';

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
  constructor(private http: HttpClient, private videoservice: VideolistServiceService) { }

  ngOnInit() {

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
      this.videoservice.addVideo(newVideo)
      .subscribe(vids=>{
        this.videos.push(vids)
      })

  }


}
