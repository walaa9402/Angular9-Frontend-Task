import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // region declare variable

  today: Date;
  languageCode = 'en';
  languages = [
    { 'languageCode': 'en', 'languageName': 'English' },
    { 'languageCode': 'ar', 'languageName': 'Arabic' }
  ]

  // #endregion 

  // #endregion 
  
  // #region constructor
  
  constructor(public translate: TranslateService) { 
    // init variables
    this.today = new Date();
  }

  // #endregion 

  // #region ngOnInit

  ngOnInit(): void {
  }

   // #endregion 
  
  // #region main actions

  languageChange(lang: string) {
    this.languageCode = lang;
    this.translate.use(this.languageCode);
  }

  // #endregion 

}
