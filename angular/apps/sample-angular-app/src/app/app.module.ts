import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TechnologiesLearntComponent } from './technologies-learnt/technologies-learnt.component';
import { SignOffComponent } from './technologies-learnt/sign-off/sign-off.component';

@NgModule({
  declarations: [
    AppComponent,
    TechnologiesLearntComponent,
    SignOffComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
