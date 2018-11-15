import { Component, OnInit } from '@angular/core';
import { VideolistServiceService } from 'src/app/videolist-service.service';
import { Videos } from '../videolisting-users/videos.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-videolisting-admin',
  templateUrl: './videolisting-admin.component.html',
  styleUrls: ['./videolisting-admin.component.css'],
  providers:[VideolistServiceService]
})
export class VideolistingAdminComponent implements OnInit {
  videos: Videos[];
  imgPath="../../../../assets/";

  constructor(private videoService:VideolistServiceService, private router:Router) { }

  ngOnInit() {
    

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
