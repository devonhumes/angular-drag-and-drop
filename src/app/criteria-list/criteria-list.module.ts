import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriteriaListComponent } from './criteria-list.component';
import { CriteriaCategoryComponent } from './criteria-category/criteria-category.component';
import { CriteriaCategoryItemComponent } from './criteria-category-item/criteria-category-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CriteriaListComponent, CriteriaCategoryComponent, CriteriaCategoryItemComponent],
  exports: [CriteriaListComponent]
})
export class CriteriaListModule { }
