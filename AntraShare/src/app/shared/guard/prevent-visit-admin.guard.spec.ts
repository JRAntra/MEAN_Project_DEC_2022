import { TestBed } from '@angular/core/testing';

import { PreventVisitAdminGuard } from './prevent-visit-admin.guard';

describe('PreventVisitAdminGuard', () => {
  let guard: PreventVisitAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreventVisitAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
