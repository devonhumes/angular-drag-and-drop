import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriaCategoryItemComponent } from './criteria-category-item.component';

describe('CriteriaCategoryItemComponent', () => {
  let component: CriteriaCategoryItemComponent;
  let fixture: ComponentFixture<CriteriaCategoryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriteriaCategoryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteriaCategoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
