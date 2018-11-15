import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AdminloginComponent } from './body/adminlogin/adminlogin.component';
import { VideolistingAdminComponent } from './body/videolisting-admin/videolisting-admin.component';
import { UpdateVideoComponent } from './body/videolisting-admin/update-video/update-video.component';
import { AddVideoComponent } from './body/videolisting-admin/add-video/add-video.component';
import { VideolistingUsersComponent } from './body/videolisting-users/videolisting-users.component';
import { ReserveVideoComponent } from './body/videolisting-users/reserve-video/reserve-video.component';
import { Routes, RouterModule } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import { CustomerlistComponent } from './body/videolisting-admin/customerlist/customerlist.component';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { VideolistServiceService } from './videolist-service.service';
const appRoutes:Routes=[
{path:'', component:BodyComponent},
{path:'reserve/:index', component:ReserveVideoComponent},
{path:'login', component:AdminloginComponent},
{path:'videolist', component:VideolistingAdminComponent},
{path:'customers', component:CustomerlistComponent},
{path:'addvideo', component:AddVideoComponent},
{path:'updatevideo/:index', component:UpdateVideoComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    AdminloginComponent,
    VideolistingAdminComponent,
    UpdateVideoComponent,
    AddVideoComponent,
    VideolistingUsersComponent,
    ReserveVideoComponent,
    CustomerlistComponent,
    
  ],
  imports: [
    HttpModule, 
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
