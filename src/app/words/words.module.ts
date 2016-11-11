import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {WordListComponent} from "./word-list/word-list.component";
import {WordsRoutingModule} from "./words-routing.module";
import {RouterModule} from "@angular/router";
import {WordComponent} from "./word/word.component";
import {ModalModule} from "ng2-modal";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule,
        ModalModule,
        WordsRoutingModule
    ],
    declarations: [
      WordListComponent,
      WordComponent
    ],
    providers: [

    ],
    exports: [
      WordListComponent,
      WordComponent
    ]
})
export class WordsModule {}
