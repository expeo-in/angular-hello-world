import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormsSampleComponent } from './template-forms-sample.component';

describe('TemplateFormsSampleComponent', () => {
  let component: TemplateFormsSampleComponent;
  let fixture: ComponentFixture<TemplateFormsSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateFormsSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormsSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
