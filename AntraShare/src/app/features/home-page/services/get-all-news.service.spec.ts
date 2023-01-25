import { TestBed } from '@angular/core/testing';

import { GetAllNewsService } from './get-all-news.service';

describe('GetAllNewsService', () => {
  let service: GetAllNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
