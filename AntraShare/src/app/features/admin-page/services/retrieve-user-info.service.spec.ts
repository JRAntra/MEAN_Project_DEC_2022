import { TestBed } from '@angular/core/testing';

import { RetrieveUserInfoService } from './retrieve-user-info.service';

describe('RetrieveUserInfoService', () => {
  let service: RetrieveUserInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetrieveUserInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
