import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCriteriaComponent } from './sample-criteria.component';

describe('SampleCriteriaComponent', () => {
  let component: SampleCriteriaComponent;
  let fixture: ComponentFixture<SampleCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
