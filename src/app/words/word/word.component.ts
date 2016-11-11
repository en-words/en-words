import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'word',
  templateUrl: './word.component.html'
})
export class WordComponent implements OnInit {

  words: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire, private route: ActivatedRoute) {}

  ngOnInit() {
    /*this.route.params.subscribe(
      params => {
        this.words = this.af.database.list('/words', {
          query: {
            orderByChild: 'unit',
            equalTo: params['id']
          }
        });
      }
    );*/
  }

}
