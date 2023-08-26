import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmojiSelectorComponent } from './emoji-selector/emoji-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    EmojiSelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
