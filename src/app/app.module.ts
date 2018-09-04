import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeatureM1Module } from './feature-m1/feature-m1.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeatureM1Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
