import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsSampleComponent } from './reactive-forms-sample.component';

describe('ReactiveFormsSampleComponent', () => {
  let component: ReactiveFormsSampleComponent;
  let fixture: ComponentFixture<ReactiveFormsSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
