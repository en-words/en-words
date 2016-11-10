import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {WordListComponent} from "./word-list/word-list.component";
import {WordsRoutingModule} from "./words-routing.module";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule,
        WordsRoutingModule
    ],
    declarations: [
      WordListComponent
    ],
    providers: [

    ],
    exports: [
      WordListComponent
    ]
})
export class WordsModule {}
