import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Feature2Module } from './feature2/feature2.module';
import { Feature1Module } from './feature1/feature1.module';


const routes: Routes = [
  // { path: '', redirectTo: '/contacts', pathMatch: 'full' }, 
  
  // { path: '', loadChildren: 'app/feature1/feature1.module#Feature1Module'},
 //  { path: 'feature1', loadChildren: 'app/feature1/feature1.module#Feature1Module'}
  // { path: 'feature2', loadChildren: 'app/feature2/feature2.module#Feature2Module'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    Feature1Module,
    Feature2Module
  ],
  declarations: [],
  exports:[RouterModule]
})
export class RoutingModule {
 
}
