import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSilhouetteComponent } from './project-silhouette.component';

describe('ProjectSilhouetteComponent', () => {
  let component: ProjectSilhouetteComponent;
  let fixture: ComponentFixture<ProjectSilhouetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSilhouetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSilhouetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
