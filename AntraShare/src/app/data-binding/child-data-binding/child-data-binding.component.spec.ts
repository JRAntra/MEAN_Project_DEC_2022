import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDataBindingComponent } from './child-data-binding.component';

describe('ChildDataBindingComponent', () => {
  let component: ChildDataBindingComponent;
  let fixture: ComponentFixture<ChildDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildDataBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
