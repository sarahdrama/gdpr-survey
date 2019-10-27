import { Component } from '@angular/core';
import {SurveyStateService} from '../../service/survey-state.service';
import {MatDialog} from '@angular/material';
import {CookieBanner} from '../cookie-banner';

@Component({
  selector: 'app-cookie-b',
  templateUrl: './cookie-b.component.html',
  styleUrls: ['./cookie-b.component.css']
})
export class CookieBComponent extends CookieBanner {

  constructor(
    public surveyStateService: SurveyStateService,
    public dialog: MatDialog ) {
      super(surveyStateService, dialog);
  }

  onUncheckAll() {
    for ( const option of this.surveyStateService.getPrivacyOptions() ) {
      option.isSelected = false;
    }
    this.onDisagree();
  }

  onCheckAll() {
    for ( const option of this.surveyStateService.getPrivacyOptions() ) {
      option.isSelected = true;
    }
    this.onAgree();
  }

  onSave() {
    this.surveyStateService.data.timeSaveSettings = Date.now();
    this.dialog.closeAll();
    this.surveyStateService.submitCookie();
  }
}
