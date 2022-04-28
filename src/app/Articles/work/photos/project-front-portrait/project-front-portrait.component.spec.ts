import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFrontPortraitComponent } from './project-front-portrait.component';

describe('ProjectFrontPortraitComponent', () => {
  let component: ProjectFrontPortraitComponent;
  let fixture: ComponentFixture<ProjectFrontPortraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectFrontPortraitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFrontPortraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
