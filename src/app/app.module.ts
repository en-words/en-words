import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularFireModule} from "angularfire2";
import {firebaseConfig} from "../environments/firebase.config";
import {GroupsModule} from "./units/groups.module";
import {AppRoutingModule} from "./app-routing.module";
import {WordsModule} from "./words/words.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    GroupsModule,
    WordsModule,
    DashboardModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
