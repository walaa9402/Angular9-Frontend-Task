import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = ([
  {
    path: '', redirectTo: '/add-employee', pathMatch: 'full'
  },
  {
    path: "add-employee",
    loadChildren: () => import("./modules/add-employee/add-employee.module").then(m => m.AddEmployeeModule)
  },
  {
    path: "employee-list",
    loadChildren: () => import("./modules/employee-list/employee-list.module").then(m => m.EmployeeListModule)
  }
]);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
