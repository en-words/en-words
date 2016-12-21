import {Component, OnInit, ViewChild} from '@angular/core';

import {GroupModel} from "../shared/group.model";
import {GroupComponent} from "../unit/group.component";
import {GroupService} from "../shared/group.service";

@Component({
  selector: 'unit-list',
  templateUrl: 'group-list.component.html'
})
export class GroupListComponent implements OnInit {

  @ViewChild(GroupComponent) groupInfo: GroupComponent;

  groups: GroupModel[];

  constructor(private groupService: GroupService) { }

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

  onSubmit(group: GroupModel) {
    console.log('Add: ' + JSON.stringify(group));
    this.groupService.saveGroup(group)
      .then(group => this.groups.push(group));
  }

}
