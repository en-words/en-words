import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularFireModule} from "angularfire2";
import {firebaseConfig} from "../environments/firebase.config";
import {UnitsModule} from "./units/units.module";
import {AppRoutingModule} from "./app-routing.module";
import {WordsModule} from "./words/words.module";
import {DashboardModule} from "./dashboard/dashboard.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UnitsModule,
    WordsModule,
    DashboardModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
