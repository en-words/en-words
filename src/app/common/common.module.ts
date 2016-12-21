import { NgModule } from '@angular/core';
import {AutofocusDirective} from "./autofocus.directive";
import {AppSettings} from "./app.settings";

@NgModule({
  declarations: [
    AutofocusDirective,
    AppSettings
  ],
  exports:[
    AutofocusDirective,
    AppSettings
  ]
})
export class CommonModule { }
