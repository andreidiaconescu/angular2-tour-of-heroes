import './rxjs-extensions';

import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import {HttpModule}    from '@angular/http';

import {AppRoutingModule} from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api/in-memory-web-api.module';
import {InMemoryDataService}  from './in-memory-data.service';

import {AppComponent}         from './app.component';
import {DashboardComponent}   from './dashboard.component';
import {HeroesComponent}      from './heroes.component';
import {HeroDetailComponent}  from './hero-detail.component';
import {HeroService}          from './hero.service';
import {HeroSearchComponent}  from './hero-search.component';

import {CustomFormValidationComponent}  from './CustomFormValidation/custom-form-validation.component';
import {EmailValidatorDirective}  from './CustomFormValidation/email-validator.directive';
import {EmailBlackListService}  from './CustomFormValidation/email-blacklist.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroSearchComponent,
        CustomFormValidationComponent,
        EmailValidatorDirective
    ],
    providers: [HeroService, EmailBlackListService],
    bootstrap: [AppComponent]
})
export class AppModule {
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */