import { TestBed } from '@angular/core/testing';

import { UsernameProfilePageService } from './username-profile-page.service';

describe('UsernameProfilePageService', () => {
  let service: UsernameProfilePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsernameProfilePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
