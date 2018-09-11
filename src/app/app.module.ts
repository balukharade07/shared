import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyPipePipe } from './my-pipe.pipe';
import { TempletsyntaxComponent } from './templetsyntax/templetsyntax.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPipePipe,
    TempletsyntaxComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
