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
    { 'languageCode': 'ar', 'languageName': 'العربية' }
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
    this.translate.use(lang);
    if (lang == "en") {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
      document.getElementsByTagName('body')[0].setAttribute('style', 'text-align:left;');
    }
    if (lang == "ar") {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
      document.getElementsByTagName('body')[0].setAttribute('style', 'text-align:right;');
    }
  }

  // #endregion 

}
