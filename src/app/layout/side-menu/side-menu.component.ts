import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(public translate: TranslateService) { 
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
