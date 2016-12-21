import {Component, ViewChild, EventEmitter, Output, OnInit} from '@angular/core';

import {GroupModel} from "../shared/group.model";
import {Modal} from "ng2-modal";

@Component({
  selector: 'group-info',
  templateUrl: 'group.component.html'
})
export class GroupComponent implements OnInit {

  group: GroupModel;
  groupTitle: string;
  @ViewChild(Modal) groupModal: Modal;
  @Output() onSubmit = new EventEmitter<GroupModel>();

  ngOnInit() {
    this.group = new GroupModel();
  }

  newGroup() {
    this.groupTitle = 'New group';
    this.group = new GroupModel();
    this.groupModal.open();
  }

  editGroup(group: GroupModel) {
    this.groupTitle = 'Edit group';
    this.group = group;
    this.groupModal.open();
  }

  submit() {
    this.onSubmit.emit(this.group);
    this.groupModal.close();
  }
}
