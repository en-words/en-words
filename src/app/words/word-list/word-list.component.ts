import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";
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

  removeWord(wordId: string) {
    this.af.database.object('/words/' + wordId).remove();
  }

  editWord(wordId: string, word: WordModal) {
    var wordData: WordModal;
    wordData = JSON.parse(JSON.stringify(word));
    wordData.id = wordId;
    this.wordInfo.editWord(wordData);
  }

  onSubmit(word: WordModal) {
    console.log(word);
    if(word.id) {
      this.words.update(word.id, word);
    } else {
      this.words.push(word);
    }
  }

  playWord(word: string) {
    responsiveVoice.speak(word, 'UK English Male', {lang: "en-US"});
  }

}
