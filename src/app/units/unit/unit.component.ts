import {Component, ViewChild, EventEmitter, Output, OnInit} from '@angular/core';

import {UnitModel} from "../shared/unit.model";
import {Modal} from "ng2-modal";

@Component({
  selector: 'group-info',
  templateUrl: './unit.component.html'
})
export class UnitComponent implements OnInit {

  group: UnitModel;
  groupTitle: string;
  @ViewChild(Modal) groupModal: Modal;
  @Output() onSubmit = new EventEmitter<UnitModel>();

  ngOnInit() {
    this.group = new UnitModel();
  }

  newUnit() {
    this.groupTitle = 'New group';
    this.group = new UnitModel();
    this.groupModal.open();
  }

  editUnit(unit: UnitModel) {
    this.groupTitle = 'Edit group';
    this.group = unit;
    this.groupModal.open();
  }

  submit() {
    this.onSubmit.emit(this.group);
    this.groupModal.close();
  }
}
