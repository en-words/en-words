import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {WordListComponent} from "./word-list/word-list.component";
import {WordsRoutingModule} from "./words-routing.module";
import {RouterModule} from "@angular/router";
import {WordComponent} from "./word/word.component";
import {ModalModule} from "ng2-modal";
import {FormsModule} from "@angular/forms";
import {WordFilterPipe} from "./shared/word-filter.pipe";
import {WordService} from "./shared/word.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ModalModule,
        WordsRoutingModule
    ],
    declarations: [
      WordListComponent,
      WordComponent,
      WordFilterPipe
    ],
    providers:[
      WordService
    ],
    exports: [
      WordListComponent,
      WordComponent,
      WordFilterPipe
    ]
})
export class WordsModule {}
