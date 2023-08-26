import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { DemoFormComponent } from './demo-form/demo-form.component';

@NgModule({
  declarations: [AppComponent, RegistrationFormComponent, DemoFormComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
