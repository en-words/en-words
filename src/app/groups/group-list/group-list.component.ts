import {Component, OnInit, ViewChild} from '@angular/core';

import {GroupModel} from "../shared/group.model";
import {GroupComponent} from "../group/group.component";
import {GroupService} from "../shared/group.service";
import {Router} from "@angular/router";

@Component({
  selector: 'group-list',
  templateUrl: 'group-list.component.html'
})
export class GroupListComponent implements OnInit {

  @ViewChild(GroupComponent) groupInfo: GroupComponent;

  groups: GroupModel[];
  selectedGroup: GroupModel;

  constructor(private groupService: GroupService, private router: Router) {}

  ngOnInit() {
    this.getGroups();
  }

  getGroups(): void {
    this.groupService
      .getGroups()
      .then(groups => this.groups = groups);
  }

  addGroup() {
    this.groupInfo.newGroup();
  }

  editGroup() {
    this.groupInfo.editGroup(this.selectedGroup);
  }

  deleteGroup() {
    if(confirm(`Do you want delete the group ${this.selectedGroup.group} with all words?`)) {
      this.groupService
        .deleteGroup(this.selectedGroup.groupId)
        .then(() => {
          this.groups = this.groups.filter(h => h !== this.selectedGroup);

          if (this.groups.length > 0) {
            this.router.navigate(['/group', this.groups[0].groupId]);
          } else {
            this.selectedGroup = null;
            this.router.navigate(['/']);
          }
        });
    }
  }

  onSelectGroup(group: GroupModel): void {
    this.selectedGroup = group;
  }

  onSubmit(group: GroupModel) {
    this.groupService
      .createGroup(group)
      .then(group => this.groups.push(group));
  }

}
