import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = 
[
  
  { 
    path: '',
    loadChildren: './feature1/feature1.module#Feature1Module'
  },
  { 
    path: 'feature1', 
    loadChildren: './feature1/feature1.module#Feature1Module'
  },
  { 
    path: 'feature2', 
    loadChildren: './feature2/feature2.module#Feature2Module'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
  declarations: []
  
})
export class RoutingModule {
 
}
