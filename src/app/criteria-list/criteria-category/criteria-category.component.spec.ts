import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriaCategoryComponent } from './criteria-category.component';

describe('CriteriaCategoryComponent', () => {
  let component: CriteriaCategoryComponent;
  let fixture: ComponentFixture<CriteriaCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriteriaCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteriaCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
