import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {

  words: FirebaseListObservable<any[]>;

  unit: String;

  constructor(private af: AngularFire, private route: ActivatedRoute) {}

  ngOnInit() {
    this.unit = this.route.snapshot.params['id'];
    this.words = this.af.database.list('/words', {
      query: {
        orderByChild: 'unit',
        equalTo: this.route.snapshot.params['id']
      }
    });
  }

}
