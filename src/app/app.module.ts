import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MydirectiveDirective } from './mydirective.directive';

@NgModule({
  declarations: [
    AppComponent,
    MydirectiveDirective,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
