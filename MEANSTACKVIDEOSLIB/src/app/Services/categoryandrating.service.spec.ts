import { TestBed } from '@angular/core/testing';

import { CategoryandratingService } from './categoryandrating.service';

describe('CategoryandratingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryandratingService = TestBed.get(CategoryandratingService);
    expect(service).toBeTruthy();
  });
});
