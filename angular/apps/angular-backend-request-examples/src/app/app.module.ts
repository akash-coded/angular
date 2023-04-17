import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GetRequestsComponent } from './get-requests/get-requests.component';
import { GetRequestComponent } from './get-requests/get-request/get-request.component';

@NgModule({
  declarations: [AppComponent, GetRequestsComponent, GetRequestComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
