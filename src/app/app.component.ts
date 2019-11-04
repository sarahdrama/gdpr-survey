import {Component, OnInit} from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import {CookieBComponent} from './cookie-banner/cookie-b/cookie-b.component';
import {CookieAComponent} from './cookie-banner/cookie-a/cookie-a.component';
import {SurveyStateService} from './service/survey-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formHidden = true;

  constructor(
    public surveyStateService: SurveyStateService,
    public dialog: MatDialog,
    public snackbar: MatSnackBar) { }

  ngOnInit() {
    this.surveyStateService.data.timeJoined = Date.now();
    if (Math.floor(Math.random() * 2) === 0) {
      this.surveyStateService.data.batch = 'A';
      this.snackbar.openFromComponent(CookieAComponent);
    } else {
      this.surveyStateService.data.batch = 'B';
      this.dialog.open(CookieBComponent, { disableClose: true } );
    }
  }

  startSurvey() {
    this.formHidden = false;
  }
}
