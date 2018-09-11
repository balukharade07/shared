import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { WebrouteModule } from './webroute.module';
import { PagenotfindComponent } from './pagenotfind/pagenotfind.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    PagenotfindComponent,
    
  ],
  imports: [
    BrowserModule,WebrouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
