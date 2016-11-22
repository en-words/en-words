import {Component, ViewChild, EventEmitter, Output, OnInit} from '@angular/core';

import {UnitModel} from "../shared/unit.model";
import {Modal} from "ng2-modal";

@Component({
  selector: 'unit-info',
  templateUrl: './unit.component.html'
})
export class UnitComponent implements OnInit {

  unit: UnitModel;
  unitTitle: string;
  @ViewChild(Modal) unitModal: Modal;
  @Output() onSubmit = new EventEmitter<UnitModel>();

  ngOnInit() {
    this.unit = new UnitModel();
  }

  newUnit() {
    this.unitTitle = 'New group';
    this.unit = new UnitModel();
    this.unitModal.open();
  }

  editUnit(unit: UnitModel) {
    this.unitTitle = 'Edit group';
    this.unit = unit;
    this.unitModal.open();
  }

  submit() {
    this.onSubmit.emit(this.unit);
    this.unitModal.close();
  }
}
