import {SurveyStateService} from '../service/survey-state.service';
import {MatDialog} from '@angular/material';

export abstract class CookieBanner {

  constructor(
    public surveyStateService: SurveyStateService,
    public dialog: MatDialog ) {
  }

  onAgree() {
    this.surveyStateService.data.timeAgreeAll = Date.now();
    this.dialog.closeAll();
    this.surveyStateService.submitCookie();
  }

  onDisagree() {
    this.surveyStateService.data.timeDisagreeAll = Date.now();
    this.dialog.closeAll();
    this.surveyStateService.submitCookie();
  }

  onReadMore() {
    this.surveyStateService.data.timeReadMore = Date.now();
  }
}
