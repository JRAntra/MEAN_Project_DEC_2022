import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsStoriesComponent } from './news-stories.component';

describe('NewsStoriesComponent', () => {
  let component: NewsStoriesComponent;
  let fixture: ComponentFixture<NewsStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsStoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
