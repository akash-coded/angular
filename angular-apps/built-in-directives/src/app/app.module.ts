import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <--- JavaScript import from Angular


import { AppComponent } from './app.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemSwitchComponents } from './item-switch.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemDetailComponent,
    ItemSwitchComponents
  ],

  imports: [
    BrowserModule,
    FormsModule // <--- import into the NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

