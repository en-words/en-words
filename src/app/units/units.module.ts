import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {UnitsComponent} from "./units.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UnitsComponent
  ],
  exports:[
    UnitsComponent
  ]
})
export class UnitsModule { }
