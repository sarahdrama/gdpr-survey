import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CookieAComponent } from './cookie-banner/cookie-a/cookie-a.component';
import { CookieBComponent } from './cookie-banner/cookie-b/cookie-b.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule,
  MatDialog,
  MatDialogModule,
  MatExpansionModule, MatFormFieldModule,
  MatSlideToggleModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {SurveyStateService} from './service/survey-state.service';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';

import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'cookie-policy', component: CookiePolicyComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CookieAComponent,
    CookieBComponent,
    HeaderComponent,
    MainPageComponent,
    CookiePolicyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule,
    RouterModule.forRoot( routes )
  ],
  entryComponents: [
    CookieAComponent,
    CookieBComponent,
    HeaderComponent,
    MainPageComponent,
    CookiePolicyComponent
  ],
  providers: [
    SurveyStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
