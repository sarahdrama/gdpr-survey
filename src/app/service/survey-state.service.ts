import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class SurveyStateService {

  cookiePolicy = 'https://www.cookiepolicygenerator.com/live.php?token=a7pnxzABKFlDo2aOzQJ7SDSRSK3uEDcF';

  api = 'https://cookiesurvey.azurewebsites.net/api/cookies';
  privacyOptions = [
    {
      id: 1,
      label: 'Information storage and access',
      explanation: 'The storage of information, or access to information that is already stored, on your device such as advertising identifiers, ' +
        'device identifiers, cookies, and similar technologies.',
      isSelected: false
    },
    {
      id: 2,
      label: 'Personalisation',
      explanation: 'The collection and processing of information about your use of this service to subsequently personalise advertising ' +
        'and/or content for you in other contexts, such as on other websites or apps, over time. ' +
        'Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of ' +
        'advertising and/or content.',
      isSelected: false
    },
    {
      id: 3,
      label: 'Something bad',
      explanation: 'We will have access to your browser history.',
      isSelected: false
    },
    {
      id: 4,
      label: 'Google',
      explanation: 'Allow Google and their technology partners to collect data and use cookies for ad personalisation and measurement.',
      isSelected: false
    }
  ];

  data: { [ k: string ]: any } =  {
  };

  constructor( public http: HttpClient ) { }

  getPrivacyOptions() {
    return this.privacyOptions;
  }

  submitCookie() {
    if (this.data.batch === 'B') {
      this.privacyOptions.forEach(o => {
        this.data[o.label] = o.isSelected;
      });
    }
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      this.data.device = 'mobile';
    }
    else {
      this.data.device = 'desktop';
    }

    $.post(this.api, JSON.stringify(this.data), null, 'json').then(s => {});
  }
}
