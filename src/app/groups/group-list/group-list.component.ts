import {Component, OnInit, ViewChild} from '@angular/core';

import {GroupModel} from "../shared/group.model";
import {GroupComponent} from "../group/group.component";
import {GroupService} from "../shared/group.service";

@Component({
  selector: 'unit-list',
  templateUrl: 'group-list.component.html'
})
export class GroupListComponent implements OnInit {

  @ViewChild(GroupComponent) groupInfo: GroupComponent;

  groups: GroupModel[];
  selectedGroup: GroupModel;

  constructor(private groupService: GroupService) {
  }

  ngOnInit() {
    this.getGroups();
  }

  getGroups(): void {
    this.groupService.getGroups()
      .then(groups => this.groups = groups);
  }

  addGroup() {
    this.groupInfo.newGroup();
  }

  editGroup() {
    this.groupInfo.editGroup(this.selectedGroup);
  }

  deleteGroup() {
    console.log("Delete group: " + JSON.stringify(this.selectedGroup));
    this.groupService.deleteGroup(this.selectedGroup.groupId);
  }

  onSelectGroup(group: GroupModel): void {
    this.selectedGroup = group;

  }

  onSubmit(group: GroupModel) {
    this.groupService.saveGroup(group)
      .then(group => this.groups.push(group));
  }

}
