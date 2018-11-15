import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideolistingUsersComponent } from './videolisting-users.component';

describe('VideolistingUsersComponent', () => {
  let component: VideolistingUsersComponent;
  let fixture: ComponentFixture<VideolistingUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideolistingUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideolistingUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
