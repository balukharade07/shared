import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { F2c2Component } from './f2c2/f2c2.component';
import { F2c1Component } from './f2c1/f2c1.component';
import { Routing2Module } from './routing.module';

@NgModule({
  imports: [
    CommonModule,
    Routing2Module
  ],
  declarations: [F2c1Component,F2c2Component],
  exports:[F2c1Component,F2c2Component]
})
export class Feature2Module { }
