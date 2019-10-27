import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SurveyStateService {

  api = 'https://cookiesurvey.azurewebsites.net/api/cookies';
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
    privacyOptions: this.privacyOptions
  };

  constructor( public http: HttpClient ) { }

  getPrivacyOptions() {
    return this.privacyOptions;
  }

  submitCookie() {
    console.error('data to be sent', this.data);

    const req = this.http.post(this.api, this.data).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('Error occured');
      }
    );
  }
}
