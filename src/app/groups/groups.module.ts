import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {GroupListComponent} from "./group-list/group-list.component";
import {RouterModule} from "@angular/router";
import {ModalModule} from "ng2-modal";
import {GroupComponent} from "./group/group.component";
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
    GroupListComponent,
    GroupComponent
  ],
  exports: [
    GroupListComponent,
    GroupComponent
  ],
  providers: [
    GroupService
  ]
})
export class GroupsModule { }
