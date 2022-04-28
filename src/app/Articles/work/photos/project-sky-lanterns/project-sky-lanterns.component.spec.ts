import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSkyLanternsComponent } from './project-sky-lanterns.component';

describe('ProjectSkyLanternsComponent', () => {
  let component: ProjectSkyLanternsComponent;
  let fixture: ComponentFixture<ProjectSkyLanternsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSkyLanternsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSkyLanternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
