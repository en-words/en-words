import {Component, OnInit, ViewChild} from '@angular/core';

import {GroupModel} from "../shared/group.model";
import {GroupComponent} from "../group/group.component";
import {GroupService} from "../shared/group.service";
import {Router} from "@angular/router";
import {WordService} from "../../words/shared/word.service";

@Component({
  selector: 'group-list',
  templateUrl: 'group-list.component.html'
})
export class GroupListComponent implements OnInit {

  @ViewChild(GroupComponent) groupInfo: GroupComponent;

  groups: GroupModel[];
  selectedGroup: GroupModel;

  constructor(private groupService: GroupService, private router: Router, private wordService: WordService) {}

  ngOnInit() {
    this.getGroups();
  }

  getGroups(): void {
    this.groupService
      .getGroups()
      .then(groups => this.groups = groups.sort((a, b) => this.compareGroups(a, b)));
  }

  addGroup() {
    this.groupInfo.newGroup();
  }

  editGroup() {
    let groupData: GroupModel;
    groupData = JSON.parse(JSON.stringify(this.selectedGroup));
    this.groupInfo.editGroup(groupData);
  }

  deleteGroup() {
    if(confirm(`Do you want to delete the group ${this.selectedGroup.group} with all words?`)) {
      this.wordService.deleteWords(this.selectedGroup.groupId)
        .then(() => null);

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
    if (group.groupId) {
      // update a group
      this.groupService
        .updateGroup(group)
        .then(group => {
          for (let item in this.groups) {
            if (this.groups[item].groupId === group.groupId) {
              this.groups[item].group = group.group;
            }
          }

          this.groups.sort((a, b) => this.compareGroups(a, b));
        });
    } else {
      // create a new group
      this.groupService
        .createGroup(group)
        .then(group => {
          this.groups.push(group);
          this.groups.sort((a, b) => this.compareGroups(a, b));
        });
    }
  }

  compareGroups(a: GroupModel, b: GroupModel): number {
      if (a.group.toLowerCase() == b.group.toLowerCase())
        return 0;

      if (a.group.toLowerCase() > b.group.toLowerCase())
        return 1;
      else
        return -1;
  }

}
