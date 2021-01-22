import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  // #region declare variable

  sideMenuLinks: { routerLink: string, text: string }[];

  // #endregion 

  // #region constructor

  constructor() { 
    // init variables
    this.sideMenuLinks = [
      {text:"Add Employee",routerLink:"/add-employee"},
      {text:"Employee List",routerLink:"/employee-list"}
    ]
  }

  // #endregion

  // #region ngOnInit

  ngOnInit() { }

  // #endregion

}
