import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {ActivatedRoute} from "@angular/router";
import {WordModal} from "../shared/word.modal";
import {WordComponent} from "../word/word.component";

@Component({
  selector: 'word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {

  @ViewChild(WordComponent) wordInfo: WordComponent;
  words: FirebaseListObservable<WordModal[]>;
  unit: string;

  constructor(private af: AngularFire, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.unit = params['id'];
        this.words = this.af.database.list('/words', {
          query: {
            orderByChild: 'unit',
            equalTo: this.unit
          }
        });
      }
    );
  }

  addWord() {
    this.wordInfo.newWord();
  }

  onSubmit(word: WordModal) {
    this.words.push(word);
  }

}
