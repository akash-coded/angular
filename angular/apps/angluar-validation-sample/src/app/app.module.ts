import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormTemplateComponent } from './form-template/form-template.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';

@NgModule({
  declarations: [AppComponent, FormTemplateComponent, FormReactiveComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
