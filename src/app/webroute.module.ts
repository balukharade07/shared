import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfindComponent } from './pagenotfind/pagenotfind.component';

const routes: Routes = 
[
  
  { 
    path: '',
    component: HomeComponent
  },
  { 
    path: 'home', 
    component: HomeComponent
  },
  { 
    path: 'about', 
    component: AboutComponent
  },
  { 
    path: 'service', 
    component: ServiceComponent
  },
  { 
    path: 'contact', 
    component: ContactComponent
  },
  { 
    path: '**', 
    component: PagenotfindComponent
  }
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class WebrouteModule { }
