import { TestBed } from '@angular/core/testing';


import { VideolistServiceService } from './videolist-service.service';

describe('VideolistServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideolistServiceService = TestBed.get(VideolistServiceService);
    expect(service).toBeTruthy();
  });
});
