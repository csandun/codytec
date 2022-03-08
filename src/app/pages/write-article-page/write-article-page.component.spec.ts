import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteArticlePageComponent } from './write-article-page.component';

describe('WriteArticlePageComponent', () => {
  let component: WriteArticlePageComponent;
  let fixture: ComponentFixture<WriteArticlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteArticlePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
