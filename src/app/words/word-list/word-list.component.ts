import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";
import {ActivatedRoute} from "@angular/router";
import {WordModel} from "../shared/word.model";
import {WordComponent} from "../word/word.component";
import {UnitModel} from "../../units/shared/unit.model";

@Component({
  selector: 'word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {

  @ViewChild(WordComponent) wordInfo: WordComponent;
  words: FirebaseListObservable<WordModel[]>;
  unitName: string;
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
        this.af.database.object('/units/' + this.unit).subscribe(u => this.unitName = u.name);
      }
    );
  }

  addWord() {
    this.wordInfo.newWord();
  }

  removeWord(wordId: string) {
    this.af.database.object('/words/' + wordId).remove();
  }

  editWord(wordId: string, word: WordModel) {
    var wordData: WordModel;
    wordData = JSON.parse(JSON.stringify(word));
    wordData.id = wordId;
    this.wordInfo.editWord(wordData);
  }

  onSubmit(word: WordModel) {
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
