import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeListBarComponent } from './like-list-bar.component';

describe('LikeListBarComponent', () => {
  let component: LikeListBarComponent;
  let fixture: ComponentFixture<LikeListBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeListBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeListBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
