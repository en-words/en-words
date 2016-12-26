import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import {WordListComponent} from "./word-list/word-list.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'group/:id', component: WordListComponent }
        ])
    ],
    exports: [
      RouterModule
    ]
})
export class WordsRoutingModule { }
