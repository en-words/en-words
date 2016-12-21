import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {UnitListComponent} from "./unit-list/unit-list.component";
import {RouterModule} from "@angular/router";
import {ModalModule} from "ng2-modal";
import {UnitComponent} from "./unit/unit.component";
import {FormsModule} from "@angular/forms";
import {GroupService} from "./shared/group.service";

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
  ],
  providers: [
    GroupService
  ]
})
export class UnitsModule { }
