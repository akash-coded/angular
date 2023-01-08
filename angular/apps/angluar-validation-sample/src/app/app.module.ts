import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormTemplateComponent } from './form-template/form-template.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormTemplateComponent,
    FormReactiveComponent,
    ForbiddenValidatorDirective,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
