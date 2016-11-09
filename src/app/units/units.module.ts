import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {UnitsComponent} from "./units.component";
import {BrowserModule} from "@angular/platform-browser";
import {UnitsRoutingModule} from "./units-routing.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    UnitsRoutingModule
  ],
  declarations: [
    UnitsComponent
  ],
  exports: [
    UnitsComponent
  ]
})
export class UnitsModule { }
