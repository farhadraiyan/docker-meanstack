import { Component, OnInit } from '@angular/core';
import { VideolistServiceService } from 'src/app/videolist-service.service';
import { Videos } from '../videolisting-users/videos.model';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-videolisting-admin',
  templateUrl: './videolisting-admin.component.html',
  styleUrls: ['./videolisting-admin.component.css'],
  providers:[VideolistServiceService]
})
export class VideolistingAdminComponent implements OnInit {
  videos: Videos[];
  imgPath="../../../../assets/";

  constructor(private cookieservice:CookieService,private videoService:VideolistServiceService, private router:Router) { }

  ngOnInit() {
    //checking user login status if not logged in redirect
    if(this.cookieservice.get("login")=="")
    {
      this.router.navigate(['']);
    }

    //subscribe to get all videos 
    this.videoService.getVideolist()
    .subscribe((vids) => {
      this.videos = vids;
    })
    

  }
  navigateCusts()
  {
this.router.navigate(['/customers']);
  }
  navigateVids()
  {
    this.router.navigate(['/videolist']);
  }
  deleteVideo(index)
  {
    this.videos.splice(index,1);

  }

}
