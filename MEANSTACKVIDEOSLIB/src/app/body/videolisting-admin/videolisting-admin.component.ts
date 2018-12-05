import { Component, OnInit } from '@angular/core';
import { VideolistServiceService } from 'src/app/Services/videolist-service.service';
import { Videos } from '../videolisting-users/videos.model';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SearchService } from 'src/app/Services/search.service';


@Component({
  selector: 'app-videolisting-admin',
  templateUrl: './videolisting-admin.component.html',
  styleUrls: ['./videolisting-admin.component.css'],
  providers: [VideolistServiceService]
})
export class VideolistingAdminComponent implements OnInit {
  videos: Videos[];
  //here its always good to use absolute path to avoid error
  imgPath = "src/assets/";
  videos2: Videos[];

  constructor(private searchservice: SearchService, private cookieservice: CookieService, private videoService: VideolistServiceService, private router: Router) { }

  ngOnInit() {
    //checking user login status if not logged in redirect
    if (this.cookieservice.get("login") == "") {
      this.router.navigate(['']);
    }

    //subscribe to get all videos 
    this.videoService.getVideolist()
      .subscribe((vids) => {
        this.videos = vids;
        this.videos2 = this.videos;
      })


  }
  navigateCusts() {
    this.router.navigate(['/customers']);
  }
  navigateVids() {
    this.router.navigate(['/videolist']);
  }
  deleteVideo(index, id) {
    this.videoService.deleteVideo(id)
      .subscribe()
    this.videos.splice(index, 1);

  }

  filterVideos(event: any) {
    this.videos2 = this.searchservice.filteredVideos(event, this.videos);
  }

}
