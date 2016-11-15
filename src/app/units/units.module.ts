import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {UnitListComponent} from "./unit-list/unit-list.component";
import {RouterModule} from "@angular/router";
import {ModalModule} from "ng2-modal";
import {UnitComponent} from "./unit/unit.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule,
    RouterModule
  ],
  declarations: [
    UnitListComponent,
    UnitComponent
  ],
  exports: [
    UnitListComponent,
    UnitComponent
  ]
})
export class UnitsModule { }
