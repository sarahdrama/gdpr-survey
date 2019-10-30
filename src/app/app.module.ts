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
  MatSlideToggleModule,
  MatToolbarModule
} from '@angular/material';
import {SurveyStateService} from './service/survey-state.service';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CookieAComponent,
    CookieBComponent,
    HeaderComponent,
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
    MatFormFieldModule
  ],
  entryComponents: [
    CookieAComponent,
    CookieBComponent,
    HeaderComponent
  ],
  providers: [
    SurveyStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
