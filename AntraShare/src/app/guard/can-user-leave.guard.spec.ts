import { TestBed } from '@angular/core/testing';

import { CanUserLeaveGuard } from './can-user-leave.guard';

describe('CanUserLeaveGuard', () => {
  let guard: CanUserLeaveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanUserLeaveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
