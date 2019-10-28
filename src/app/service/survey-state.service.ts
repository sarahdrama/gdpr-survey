import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SurveyStateService {

  api = 'http://localhost:52648/api/cookies';
  privacyOptions = [
    {
      id: 1,
      label: 'Option 1',
      explanation: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua',
      isSelected: false
    },
    {
      id: 2,
      label: 'Option 2',
      explanation: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua',
      isSelected: false
    },
    {
      id: 3,
      label: 'Option 3',
      explanation: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua',
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
    if(this.data.batch === 'B') {
      this.privacyOptions.forEach(o => {
        this.data[o.label] = o.isSelected;
      });
    }
    this.http.post(this.api, this.data).toPromise();
  }
}
