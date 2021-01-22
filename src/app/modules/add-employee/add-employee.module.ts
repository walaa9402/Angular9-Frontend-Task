import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee.component';


const routes: Routes = ([
  {
    path: "",
    component:AddEmployeeComponent
  }
]);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AddEmployeeModule { }
