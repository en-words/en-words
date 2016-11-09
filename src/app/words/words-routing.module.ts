import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import {WordListComponent} from "./word-list/word-list.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'unit/:id', component: WordListComponent }
        ])
    ],
    exports: [
      RouterModule
    ]
})
export class WordsRoutingModule { }
