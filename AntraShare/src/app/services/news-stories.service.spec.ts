import { TestBed } from '@angular/core/testing';

import { NewsStoriesService } from './news-stories.service';

describe('NewsStoriesService', () => {
  let service: NewsStoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsStoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
