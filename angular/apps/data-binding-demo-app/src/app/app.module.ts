import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TwoWayBindingComponent } from './welcome/two-way-binding/two-way-binding.component';
import { OneWayBindingComponent } from './welcome/one-way-binding/one-way-binding.component';
import { EventBindingComponent } from './welcome/one-way-binding/event-binding/event-binding.component';
import { PropertyDataBindingComponent } from './welcome/one-way-binding/property-data-binding/property-data-binding.component';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, TwoWayBindingComponent, OneWayBindingComponent, EventBindingComponent, PropertyDataBindingComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
