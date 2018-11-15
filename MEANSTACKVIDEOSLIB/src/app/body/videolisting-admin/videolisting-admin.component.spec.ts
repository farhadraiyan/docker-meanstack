import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideolistingAdminComponent } from './videolisting-admin.component';

describe('VideolistingAdminComponent', () => {
  let component: VideolistingAdminComponent;
  let fixture: ComponentFixture<VideolistingAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideolistingAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideolistingAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
