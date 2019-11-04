import {SurveyStateService} from '../service/survey-state.service';

export abstract class CookieBanner {

  disableAnimation = true;

  constructor(
    public surveyStateService: SurveyStateService ) {
  }

  onReadMore() {
    this.surveyStateService.data.timeReadMore = Date.now();
  }
}
