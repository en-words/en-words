import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {ActivatedRoute} from "@angular/router";

import {WordModel} from "../shared/word.model";
import {WordComponent} from "../word/word.component";
import {WordService} from "../shared/word.service";

@Component({
  selector: 'word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {

  @ViewChild(WordComponent) wordInfo: WordComponent;
  words: WordModel[];
  unitName: string;
  unit: string;


  constructor(private af: AngularFire, private wordService: WordService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.unit = params['id'];
        this.words = this.wordService.getWords(this.unit);
        this.af.database.object('/units/' + this.unit).subscribe(u => this.unitName = u.name);
        console.log(this.words);
      }
    );
  }

  addWord() {
    this.wordInfo.newWord();
  }

  removeWord(wordId: string) {
    this.af.database.object('/words/' + wordId).remove();
  }

  editWord(id: string, word: WordModel) {
    var wordData: WordModel;
    wordData = JSON.parse(JSON.stringify(word));
    wordData.id = id;
    this.wordInfo.editWord(wordData);
  }

  onSubmit(word: WordModel) {
    if(word.id) {
      this.af.database.object('/words/' + word.id)
        .update({word: word.word, translation: word.translation, comments: word.comments ? word.comments : ''});
    } else {
      this.words.push(word);
    }
  }

  playWord(word: string) {
    responsiveVoice.speak(word, 'UK English Male', {lang: "en-US"});
  }

}
