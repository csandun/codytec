import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTagCloudComponent } from './app-tag-cloud.component';

describe('AppTagCloudComponent', () => {
  let component: AppTagCloudComponent;
  let fixture: ComponentFixture<AppTagCloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppTagCloudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTagCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
