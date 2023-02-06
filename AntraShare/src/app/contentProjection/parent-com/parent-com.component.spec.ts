import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComComponent } from './parent-com.component';

describe('ParentComComponent', () => {
  let component: ParentComComponent;
  let fixture: ComponentFixture<ParentComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
