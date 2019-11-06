import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'GDPR Survey';

  constructor( public router: Router ) { }

  ngOnInit() {
    this.router.events.subscribe( e => {
      if ( e instanceof NavigationEnd && this.router.url === '/cookie-policy') {
        this.title = 'Cookie Policy';
      }
    });
  }
}
