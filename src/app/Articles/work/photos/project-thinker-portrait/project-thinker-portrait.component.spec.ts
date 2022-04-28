import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectThinkerPortraitComponent } from './project-thinker-portrait.component';

describe('ProjectThinkerPortraitComponent', () => {
  let component: ProjectThinkerPortraitComponent;
  let fixture: ComponentFixture<ProjectThinkerPortraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectThinkerPortraitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectThinkerPortraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
