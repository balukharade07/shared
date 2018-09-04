import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeatureS1Module } from './feature-s1/feature-s1.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FeatureS1Module,SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
