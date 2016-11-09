import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {AngularFireModule} from "angularfire2";
import {firebaseConfig} from "../environments/firebase.config";
import {UnitsModule} from "./units/units.module";
import {AppRoutingModule} from "./app-routing.module";
import {WordsModule} from "./words/words.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UnitsModule,
    WordsModule,
    DashboardModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
