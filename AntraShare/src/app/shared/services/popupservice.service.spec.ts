import { TestBed } from '@angular/core/testing';

import { PopupserviceService } from './popupservice.service';

describe('PopupserviceService', () => {
  let service: PopupserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopupserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
