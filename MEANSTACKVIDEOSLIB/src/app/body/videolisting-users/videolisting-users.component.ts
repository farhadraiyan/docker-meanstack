import { Component, OnInit } from '@angular/core';
import { Videos } from './videos.model';
import { VideolistServiceService } from '../../videolist-service.service';
@Component({
  selector: 'app-videolisting-users',
  templateUrl: './videolisting-users.component.html',
  styleUrls: ['./videolisting-users.component.css'],
  providers: [VideolistServiceService]
})
export class VideolistingUsersComponent implements OnInit {
  videos: Videos[];
  videos2: Videos[] = [];//assign this array to iterate since i cannot change the main videos array

  constructor(private videoService: VideolistServiceService) { }

  ngOnInit() {

    this.videoService.getVideolist()
      .subscribe((vids) => {
        this.videos = vids;
        this.videos2 = this.videos;
      })
  }

  filteredVideos(event: any) {
    console.log(event.target.value)
    this.videos2 = [];//for every keypress assign empty array and  then update in for loop

    // this.videos=this.videos.splice(0,4)
    for (let i = 0; i < this.videos.length; i++) {
      if (this.videos[i].title.startsWith(event.target.value)) {
        this.videos2.push(this.videos[i]);
      }
    }
    // console.log(this.videos2.length)

  }


}
