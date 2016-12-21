import {Component, OnInit, ViewChild} from '@angular/core';

import {UnitModel} from "../shared/unit.model";
import {UnitComponent} from "../unit/unit.component";
import {GroupService} from "../shared/group.service";

@Component({
  selector: 'unit-list',
  templateUrl: './unit-list.component.html'
})
export class UnitListComponent implements OnInit {

  @ViewChild(UnitComponent) groupInfo: UnitComponent;

  groups: UnitModel[];

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.getGroups();
  }

  getGroups(): void {
    this.groupService.getGroups()
      .then(groups => this.groups = groups);
  }

  addGroup() {
    this.groupInfo.newUnit();
  }

  onSubmit(group: UnitModel) {
    console.log('Add: ' + JSON.stringify(group));
    this.groupService.saveGroup(group)
      .then(group => this.groups.push(group));
  }

}
