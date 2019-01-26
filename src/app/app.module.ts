import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PushComponent } from './push/push.component';
import { DateCalComponent } from './date-cal/date-cal.component';
// import { RouterModule, Routes} from '@angular/router';
// import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PushComponent,
    DateCalComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    
    // OwlDateTimeModule,
    // OwlNativeDateTimeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
