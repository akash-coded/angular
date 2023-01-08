import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReactiveFavoriteColorComponent } from './reactive-favorite-color/reactive-favorite-color.component';
import { TemplateFavoriteColorComponent } from './template-favorite-color/template-favorite-color.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFavoriteColorComponent,
    TemplateFavoriteColorComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
