import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTurkishLightsComponent } from './project-turkish-lights.component';

describe('ProjectTurkishLightsComponent', () => {
  let component: ProjectTurkishLightsComponent;
  let fixture: ComponentFixture<ProjectTurkishLightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectTurkishLightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTurkishLightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
