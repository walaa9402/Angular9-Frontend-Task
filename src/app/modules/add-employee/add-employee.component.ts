// angular modules
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

// models
import { EmployeeDto } from './add-employee.model';

// services
import { LocalStorageService } from '../../services/local-storage.service';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit  {

  // #region declare variables

  employeeForm: FormGroup;
  employeeModel: EmployeeDto;
  formSubmitted: boolean;

  // #endregion 

  // #region constructor

  constructor(
    public title: Title,
    public formBuilder: FormBuilder,
    public translate: TranslateService,
    public localStorage: LocalStorageService,
    private calendar: NgbCalendar
  ) {
    // screen title
    this.title.setTitle("Add Employee");

    // init variables
    this.employeeModel = new EmployeeDto;
    this.employeeModel.birthday = this.calendar.getToday();

    // init form
    this.initForm();
  }

  // #endregion 

  // #region ngOnInit / ngOnChanges

  ngOnInit() { }

  // #endregion 

  // #region init form

  initForm() {
    this.employeeForm = this.formBuilder.group({
      txtName: [, Validators.required],
      txtCode: [, [Validators.required,Validators.min(1)]],
      ddlDepartment: [, Validators.required],
      txtBirthday: [, Validators.required]
    })
  }

  // #endregion 

  // #region get form controls

  get employeeFormControls() {
    return this.employeeForm.controls;
  }

  // #endregion 

  // #region main actions

  addEmployee(model: EmployeeDto) {
    this.formSubmitted = true;
    if (this.employeeForm.valid) {
      this.formSubmitted = false;
      const employeeList: EmployeeDto[] = this.localStorage.retrieve("employee-list");
      if (employeeList && employeeList.length) {
        model.id = employeeList.length;
        employeeList.push(model);
        this.localStorage.store("employee-list", employeeList);
      } else {
        model.id = 0;
        this.localStorage.store("employee-list", [model]);
      }
      this.employeeModel = new EmployeeDto;
      alert("Employee added successfully!")
    }
  }

  // #endregion 

}
