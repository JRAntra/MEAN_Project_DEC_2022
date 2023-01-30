import { TestBed } from '@angular/core/testing';

import { LikedPostService } from './liked-post.service';

describe('LikedPostService', () => {
  let service: LikedPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikedPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
