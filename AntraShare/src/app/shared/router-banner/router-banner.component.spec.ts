import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterBannerComponent } from './router-banner.component';

describe('RouterBannerComponent', () => {
  let component: RouterBannerComponent;
  let fixture: ComponentFixture<RouterBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
