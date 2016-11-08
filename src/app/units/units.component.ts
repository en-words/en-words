import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html'
})
export class UnitsComponent {

  units: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.units = af.database.list('/units');
  }

}
