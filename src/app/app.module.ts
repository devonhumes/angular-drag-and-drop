import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatCardModule, MatGridListModule } from '@angular/material';
import { CriteriaListModule } from './criteria-list/criteria-list.module';
import { SampleCriteriaModule } from './sample-criteria/sample-criteria.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatCardModule,
    CriteriaListModule,
    SampleCriteriaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
