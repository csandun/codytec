import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleAuthorInfoboxComponent } from './article-author-infobox.component';

describe('ArticleAuthorInfoboxComponent', () => {
  let component: ArticleAuthorInfoboxComponent;
  let fixture: ComponentFixture<ArticleAuthorInfoboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleAuthorInfoboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleAuthorInfoboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
