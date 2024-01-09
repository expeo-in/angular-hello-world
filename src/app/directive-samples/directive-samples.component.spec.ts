import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveSamplesComponent } from './directive-samples.component';

describe('DirectiveSamplesComponent', () => {
  let component: DirectiveSamplesComponent;
  let fixture: ComponentFixture<DirectiveSamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveSamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
