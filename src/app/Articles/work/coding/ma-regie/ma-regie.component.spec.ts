import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaRegieComponent } from './ma-regie.component';

describe('MaRegieComponent', () => {
  let component: MaRegieComponent;
  let fixture: ComponentFixture<MaRegieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaRegieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaRegieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
