import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { F1s1Component } from './f1s1/f1s1.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [F1s1Component],
  exports:[F1s1Component]
})
export class SharedModule { }
