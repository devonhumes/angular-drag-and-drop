import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriteriaListComponent } from './criteria-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CriteriaListComponent],
  exports: [CriteriaListComponent]
})
export class CriteriaListModule { }
