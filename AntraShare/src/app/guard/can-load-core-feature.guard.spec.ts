import { TestBed } from '@angular/core/testing';

import { CanLoadCoreFeatureGuard } from './can-load-core-feature.guard';

describe('CanLoadCoreFeatureGuard', () => {
  let guard: CanLoadCoreFeatureGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanLoadCoreFeatureGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
