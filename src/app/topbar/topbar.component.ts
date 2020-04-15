import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import {Router,ActivatedRoute} from "@angular/router"
import { TranslocoService } from '@ngneat/transloco';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
    nameUser: String = '';
      locales = [
    { label: '🇺🇸 English (US)', value: 'en-US' },
    { label: 'vi Việt Nam', value: 'vi' },
  
  ];
  detectedLocale = '';
  // the default locale
  locale = this.locales[0].value;
  constructor(  private authService: AuthService,
                private route: Router,
                private translocoService: TranslocoService) { 
                      const supportedRegex = new RegExp('^' + this.locales.map(l => l.value.substring(0, 2)).join('|^'));
    // check if the user's preferred language is supported and if so, use it.
    if (this.detectedLocale.match(supportedRegex)) {
      this.updateLocale(this.detectedLocale);
    }
                }

  ngOnInit() {
    this.nameUser = localStorage.getItem('nameUser');
  }
  getUsersLocale(defaultValue: string): string {
    if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
      return defaultValue;
    }
    const wn = window.navigator as any;
    let lang = wn.languages ? wn.languages[0] : defaultValue;
    lang = lang || wn.language || wn.browserLanguage || wn.userLanguage;
    return lang;
  }
  // change locale/language at runtime
  updateLocale(locale) {
    console.log('update locale', locale);
    if (this.locales.some(l => l.value === locale)) {
      this.locale = locale;
    }
    const lang = locale.substring(0, 2);
    this.translocoService.setActiveLang(lang);
  }
   signOut(): void {
    this.authService.signOut();
    this.route.navigate(['']);  }
    
}