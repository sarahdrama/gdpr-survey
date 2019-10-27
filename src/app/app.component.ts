import {Component, ComponentFactoryResolver, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
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
    public dialog: MatDialog) { }

  ngOnInit() {
    this.surveyStateService.data.timeJoined = Date.now();
    let batch;
    if (Math.floor(Math.random() * 2) === 0) {
      batch = CookieAComponent;
      this.surveyStateService.data.batch = 'A';
    } else {
      batch = CookieBComponent;
      this.surveyStateService.data.batch = 'B';
    }
    this.dialog.open(batch, { disableClose: true } );
  }

  startSurvey() {
    this.formHidden = false;
  }
}
