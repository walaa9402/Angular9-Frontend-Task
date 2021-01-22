import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { EmployeeDto } from '../add-employee/add-employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  // #region declare variables

  employeeName: string;
  employeeDepartment: string;
  listOfEmployee: EmployeeDto[];
  searchSubmitted: boolean;
  selectAllEmployees: boolean;
  // #endregion 

  // #region constructor

  constructor(
    public title: Title,
    public localStorage: LocalStorageService,
    public translate: TranslateService
  ) {
    // screen title
    this.title.setTitle("Add Employee");

    // init variables
    this.listOfEmployee = this.localStorage.retrieve("employee-list") || [];
  }

  // #endregion 

  // #region ngOnInit

  ngOnInit(): void { }

  // #endregion 

  // #region search

  search() {
    if (this.listOfEmployee.length) {
      this.searchSubmitted = true;
      if (this.employeeName && this.employeeDepartment) {
        this.searchSubmitted = false;
        this.listOfEmployee = this.listOfEmployee
          .filter(
            employee => employee.department.toLowerCase().indexOf(this.employeeDepartment.toLocaleLowerCase()) >-1 
              && employee.name.toLocaleLowerCase().indexOf(this.employeeName.toLocaleLowerCase()) >-1 );
      }
      else this.listOfEmployee = this.localStorage.retrieve("employee-list") || [];
    }
    else alert("There's no employee to show, Please add employees then try to search.")
  }

  handleSelectAllEmployee(selectAll: boolean) {
    this.listOfEmployee.forEach(employee => employee.selected = selectAll);
  }

  // #endregion 

}
