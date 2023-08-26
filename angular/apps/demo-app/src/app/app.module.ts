import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { InterpolationComponent } from './data-binding/interpolation/interpolation.component';
import { PropertyBindingComponent } from './data-binding/property-binding/property-binding.component';
import { OneWayBindingComponent } from './event-binding/one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './event-binding/two-way-binding/two-way-binding.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    DataBindingComponent,
    EventBindingComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    OneWayBindingComponent,
    TwoWayBindingComponent,
    UserDetailsComponent,
    FormsComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
