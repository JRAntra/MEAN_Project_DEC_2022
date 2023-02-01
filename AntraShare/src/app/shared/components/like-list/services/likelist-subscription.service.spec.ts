import { TestBed } from '@angular/core/testing';

import { LikelistSubscriptionService } from './likelist-subscription.service';

describe('LikelistSubscriptionService', () => {
  let service: LikelistSubscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikelistSubscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
