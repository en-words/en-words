import {Component, ViewChild, EventEmitter, Output, OnInit} from '@angular/core';

import {UnitModal} from "../shared/unit.modal";
import {Modal} from "ng2-modal";

@Component({
  selector: 'unit-info',
  templateUrl: './unit.component.html'
})
export class UnitComponent implements OnInit {

  unit: UnitModal;
  unitTitle: string;
  @ViewChild(Modal) unitModal: Modal;
  @Output() onSubmit = new EventEmitter<UnitModal>();

  ngOnInit() {
    this.unit = new UnitModal();
  }

  newUnit() {
    this.unitTitle = 'New unit';
    this.unit = new UnitModal();
    this.unitModal.open();
  }

  editUnit(unit: UnitModal) {
    this.unitTitle = 'Edit unit';
    this.unit = unit;
    this.unitModal.open();
  }

  submit() {
    this.onSubmit.emit(this.unit);
    this.unitModal.close();
  }
}
