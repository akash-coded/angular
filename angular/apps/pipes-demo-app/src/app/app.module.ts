import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    BuiltInPipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
