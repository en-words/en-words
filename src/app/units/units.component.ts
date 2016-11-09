import {Component, OnInit} from '@angular/core';

import {AngularFire, FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'unit-list',
  templateUrl: './units.component.html'
})
export class UnitsComponent implements OnInit {

  units: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) { }

  ngOnInit() {
    this.units = this.af.database.list('/units');
  }

  addUnit(newUnit: string) {
    this.units.push({ name: newUnit });
  }

}
