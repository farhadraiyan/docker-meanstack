import { Component, OnInit } from '@angular/core';
import { Videos } from './videos.model';
import { VideolistServiceService } from '../../Services/videolist-service.service';
import {SearchService} from '../../Services/search.service';
@Component({
  selector: 'app-videolisting-users',
  templateUrl: './videolisting-users.component.html',
  styleUrls: ['./videolisting-users.component.css'],
  providers: [VideolistServiceService]
})
export class VideolistingUsersComponent implements OnInit {
  videos: Videos[];
  videos2: Videos[] = [];//assign this array to iterate since i cannot change the main videos array

  constructor(private videoService: VideolistServiceService, private searchserv:SearchService) { }

  ngOnInit() {

    this.videoService.getVideolist()
      .subscribe((vids) => {
        this.videos = vids;
        this.videos2 = this.videos;
      })
  }

  filteredVideos(event: any) {
    // this.videos2 = [];//for every keypress assign empty array and  then update in for loop
    //calling the filteredVideos from search service
    this.videos2=this.searchserv.filteredVideos(event,this.videos);
  }


}
