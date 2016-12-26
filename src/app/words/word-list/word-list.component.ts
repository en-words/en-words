import {Component, OnInit, ViewChild} from '@angular/core';
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
  groupName: string;
  group: number;


  constructor(private wordService: WordService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.group = params['id'];
        this.wordService.getWords(this.group).then(words => this.words = words);


        //this.af.database.object('/units/' + this.unit).subscribe(u => this.unitName = u.name);
        //console.log(this.words);
      }
    );
  }

  addWord() {
    this.wordInfo.newWord();
  }

  removeWord(word: WordModel) {
    if(confirm(`Do you want delete the word?`)) {
      this.wordService
        .deleteWord(word.id)
        .then(() => {
          //this.words = this.words.filter(h => h !== this.selectedGroup);
          this.words.splice(this.words.indexOf(word), 1)

        });
    }
  }

  editWord(id: number, word: WordModel) {
    var wordData: WordModel;
    wordData = JSON.parse(JSON.stringify(word));
    wordData.id = id;
    this.wordInfo.editWord(wordData);
  }

  onSubmit(word: WordModel) {
    if(word.id) {

    } else {
      this.wordService
        .createWord(word)
        .then(word => this.words.push(word));
    }
  }

  playWord(word: string) {
    responsiveVoice.speak(word, 'UK English Male', {lang: "en-US"});
  }
}
