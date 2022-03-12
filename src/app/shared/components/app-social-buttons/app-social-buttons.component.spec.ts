import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSocialButtonsComponent } from './app-social-buttons.component';

describe('AppSocialButtonsComponent', () => {
  let component: AppSocialButtonsComponent;
  let fixture: ComponentFixture<AppSocialButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSocialButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSocialButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
