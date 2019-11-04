import { Component } from '@angular/core';
import {SurveyStateService} from '../../service/survey-state.service';
import {MatSnackBar} from '@angular/material';
import {CookieBanner} from '../cookie-banner';

@Component({
  selector: 'app-cookie-a',
  templateUrl: './cookie-a.component.html',
  styleUrls: ['./cookie-a.component.css']
})
export class CookieAComponent extends CookieBanner {

  constructor(
    public surveyStateService: SurveyStateService,
    public snackbar: MatSnackBar ) {
      super(surveyStateService );
  }

  onSimpleAgree() {
    this.surveyStateService.data.timeAgree = Date.now();
    this.snackbar.dismiss();
    this.surveyStateService.submitCookie();
  }
}
