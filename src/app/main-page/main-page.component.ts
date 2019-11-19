import { Component, OnInit } from '@angular/core';
import {CookieAComponent} from '../cookie-banner/cookie-a/cookie-a.component';
import {CookieBComponent} from '../cookie-banner/cookie-b/cookie-b.component';
import {SurveyStateService} from '../service/survey-state.service';
import {MatDialog, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  formHidden = true;

  constructor(
    public surveyStateService: SurveyStateService,
    public dialog: MatDialog,
    public snackbar: MatSnackBar) { }

  ngOnInit() {
    this.surveyStateService.data.timeJoined = Date.now();
    /* if (Math.floor(Math.random() * 2) === 0) {
      this.surveyStateService.data.batch = 'A';
      this.snackbar.openFromComponent(CookieAComponent);
    } else {
      this.surveyStateService.data.batch = 'B';
      this.dialog.open(CookieBComponent, { disableClose: true } );
    }
     */
    this.surveyStateService.data.batch = 'A';
    this.snackbar.openFromComponent(CookieAComponent);
  }

  startSurvey() {
    this.formHidden = false;
  }

}
