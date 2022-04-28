import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBlankStarePortraitComponent } from './project-blank-stare-portrait.component';

describe('ProjectBlankStarePortraitComponent', () => {
  let component: ProjectBlankStarePortraitComponent;
  let fixture: ComponentFixture<ProjectBlankStarePortraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectBlankStarePortraitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBlankStarePortraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
