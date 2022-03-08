import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTagCloudTagComponent } from './app-tag-cloud-tag.component';

describe('AppTagCloudTagComponent', () => {
  let component: AppTagCloudTagComponent;
  let fixture: ComponentFixture<AppTagCloudTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppTagCloudTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTagCloudTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
