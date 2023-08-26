import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroFormTemplateComponent } from './template/hero-form-template.component';
import { HeroFormReactiveComponent } from './reactive/hero-form-reactive.component';
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';
import { IdentityRevealedValidatorDirective } from './shared/identity-revealed.directive';
import { UniqueAlterEgoValidatorDirective } from './shared/alter-ego.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HeroFormTemplateComponent,
    HeroFormReactiveComponent,
    ForbiddenValidatorDirective,
    IdentityRevealedValidatorDirective,
    UniqueAlterEgoValidatorDirective
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/