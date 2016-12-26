import {Component, OnInit} from '@angular/core';
import {AppSettings} from "./common/app.settings";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  private version: string;

  ngOnInit() {
    this.version = AppSettings.Version;
  }
}
