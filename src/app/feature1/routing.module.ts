import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { F1c1Component } from './f1c1/f1c1.component';
import { F1c2Component } from './f1c2/f1c2.component';

const routes: Routes = [
  
        { path: '', component: F1c1Component },
        { path: 'red', component: F1c1Component },
        { path: 'green', component: F1c2Component }
 ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  
  declarations: []
})
export class Routing1Module { 

  

}
