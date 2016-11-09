import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {WordListComponent} from "./word-list/word-list.component";
import {WordsRoutingModule} from "./words-routing.module";

@NgModule({
    imports: [
        CommonModule,
        WordsRoutingModule
    ],
    declarations: [
      WordListComponent
    ],
    providers: [

    ]
})
export class WordsModule {}
