import {Component, OnInit, ViewChild} from '@angular/core';

import {AngularFire, FirebaseListObservable} from "angularfire2";
import {UnitModal} from "../shared/unit.modal";
import {UnitComponent} from "../unit/unit.component";

@Component({
  selector: 'unit-list',
  templateUrl: './unit-list.component.html'
})
export class UnitListComponent implements OnInit {

  @ViewChild(UnitComponent) unitInfo: UnitComponent;

  units: FirebaseListObservable<UnitModal[]>;

  constructor(private af: AngularFire) { }

  ngOnInit() {
    this.units = this.af.database.list('/units');
  }

  addUnit() {
    this.unitInfo.newUnit();
  }

  onSubmit(unit: UnitModal) {
    this.units.push(unit);
  }

}
