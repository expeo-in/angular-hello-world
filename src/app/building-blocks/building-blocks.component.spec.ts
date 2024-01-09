import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingBlocksComponent } from './building-blocks.component';

describe('BuildingBlocksComponent', () => {
  let component: BuildingBlocksComponent;
  let fixture: ComponentFixture<BuildingBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingBlocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
