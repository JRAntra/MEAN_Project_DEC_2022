import { TestBed } from '@angular/core/testing';

import { CanUserVisitGuard } from './can-user-visit.guard';

describe('CanUserVisitGuard', () => {
  let guard: CanUserVisitGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanUserVisitGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
