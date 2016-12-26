import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import {DashboardComponent} from "./dashboard/dashboard.component";
import {WordListComponent} from "./words/word-list/word-list.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: DashboardComponent },
            { path: 'group/:id', component: WordListComponent }
        ])
    ],
    exports: [
      RouterModule
    ]
})
export class AppRoutingModule {}
